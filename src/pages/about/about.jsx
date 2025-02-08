import React, { useState, useEffect } from "react";
import axios from "axios";
import "./about.css"; // Import the external CSS file

function About() {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    user_id: "",
    user_name: "",
    phone: "",
    email: "",
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial check

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize); // Listen for resize events

    axios
      .get("http://localhost:4000/api/data")
      .then((response) => setDatas(response.data))
      .catch((error) => console.error("Error fetching data:", error));

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener
    };
  }, []);

  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:4000/api/data/${userId}`)
      .then(() => {
        alert("User deleted successfully!");
        setDatas((prevDatas) =>
          prevDatas.filter((users) => users.user_id !== userId)
        );
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  const openEditModal = (users) => {
    setCurrentUser(users);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/api/update/${currentUser.user_id}`, {
        user_name: currentUser.user_name,
        phone: currentUser.phone,
        email: currentUser.email,
      })
      .then(() => {
        alert("User updated successfully!");
        setDatas((prevDatas) =>
          prevDatas.map((users) =>
            users.user_id === currentUser.user_id
              ? { ...users, ...currentUser }
              : users
          )
        );
        setShowModal(false);
      })
      .catch((error) => {
        console.error(
          "Error updating user:",
          error.response ? error.response.data : error.message
        );
        alert("Error updating user. Please try again.");
      });
  };

  return (
    <div className="about-container">
      {isMobile ? (
        // Mobile View: Display as a list of cards
        <div className="user-card-list">
          {datas.map((users) => (
            <div className="user-card" key={users.user_id}>
              <div className="user-card-header">
                <strong>{users.user_name}</strong>
              </div>
              <div className="user-card-body">
                <p>
                  <strong>User ID:</strong> {users.user_id}
                </p>
                <p>
                  <strong>Phone:</strong> {users.phone}
                </p>
                <p>
                  <strong>Email:</strong> {users.email}
                </p>
              </div>
              <div className="user-card-actions">
                <button className="edit-btn" onClick={() => openEditModal(users)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => deleteUser(users.user_id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Desktop View: Display as a table
        <div className="table-container">
          <table className="user-table">
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
              {datas.map((users) => (
                <tr key={users.user_id}>
                  <td>{users.user_id}</td>
                  <td>{users.user_name}</td>
                  <td>{users.phone}</td>
                  <td>{users.email}</td>
                  <td>
                    <button className="edit-btn" onClick={() => openEditModal(users)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => deleteUser(users.user_id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit User</h2>
            <form onSubmit={handleUpdate}>
              <label>Name:</label>
              <input
                type="text"
                name="user_name"
                value={currentUser.user_name}
                onChange={handleChange}
                required
              />
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={currentUser.phone}
                onChange={handleChange}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={currentUser.email}
                onChange={handleChange}
                required
              />
              <div className="modal-buttons">
                <button type="submit" className="update-btn">
                  Update
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
