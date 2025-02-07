import React, { useState, useEffect } from "react";
import axios from "axios";

function About() {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({ user_id: "", user_name: "", phone: "", email: "" });

  // ✅ **Fetch user data from "users" table**
  useEffect(() => {
    axios.get("http://localhost:4000/api/data")
      .then((response) => setDatas(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // ✅ **Delete user function**
  const deleteUser = (userId) => {
    axios.delete(`http://localhost:4000/api/data/${userId}`)
      .then(() => {
        alert("User deleted successfully!");
        setDatas(prevDatas => prevDatas.filter(users => users.user_id !== userId));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  // ✅ **Open edit modal with selected user data**
  const openEditModal = (users) => {
    setCurrentUser(users);
    setShowModal(true);
  };

  // ✅ **Handle input change inside modal**
  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  // ✅ **Handle update user**
  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:4000/api/update/${currentUser.user_id}`, {
      user_name: currentUser.user_name,
      phone: currentUser.phone,
      email: currentUser.email
  })
    .then(() => {
        alert("User updated successfully!");
        setDatas(prevDatas => prevDatas.map(users =>
            users.user_id === currentUser.user_id ? { ...users, ...currentUser } : users
        ));
        setShowModal(false); // Close modal
    })
    .catch((error) => {
        console.error("Error updating user:", error.response ? error.response.data : error.message);
        alert("Error updating user. Please try again.");
    });
};

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map(users => (
            <tr key={users.user_id}>
              <td>{users.user_id}</td>
              <td>{users.user_name}</td>
              <td>{users.phone}</td>
              <td>{users.email}</td>
              <td>
                <button 
                  style={{ backgroundColor: 'cyan' }} 
                  onClick={() => openEditModal(users)}
                >
                  Edit
                </button>
                <button 
                  style={{ backgroundColor: 'red', marginLeft: '5px' }} 
                  onClick={() => deleteUser(users.user_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Edit User Modal */}
      {showModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>Edit User</h2>
            <form onSubmit={handleUpdate}>
              <label>Name:</label>
              <input
                type="text"
                name="user_name"
                value={currentUser.user_name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <br />
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={currentUser.phone}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <br />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={currentUser.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <br />
              <button type="submit" style={buttonStyle}>Update</button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                style={cancelButtonStyle}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ✅ Styles for modal and inputs
const modalStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1000"
};

const modalContentStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "5px",
  width: "300px"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  cursor: "pointer"
};

const cancelButtonStyle = {
  backgroundColor: "#ccc",
  color: "black",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  marginLeft: "10px",
  cursor: "pointer"
};

export default About;
