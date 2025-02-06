import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/about", { state: formData });
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#000", // Black background
    padding: "20px",
  };

  const formStyle = {
    backgroundColor: "#222", // Dark gray form background
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)",
    width: "320px",
    textAlign: "center",
    color: "white",
  };

  const labelStyle = {
    display: "block",
    textAlign: "left",
    fontWeight: "bold",
    marginTop: "10px",
    color: "white",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #fff",
    backgroundColor: "#333",
    color: "white",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "15px",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1>Contact Page</h1>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Name:</label>
          <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required style={inputStyle} />

          <label style={labelStyle}>Email:</label>
          <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required style={inputStyle} />

          <label style={labelStyle}>Phone Number:</label>
          <input type="text" name="phone" placeholder="Enter Phone Number" onChange={handleChange} required style={inputStyle} />

          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
