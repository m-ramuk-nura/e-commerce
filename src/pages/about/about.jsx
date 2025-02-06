import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function About() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(location.state || { name: "Not provided", email: "Not provided", phone: "Not provided" });

  const handleDelete = () => {
    setUserData({ name: "Not provided", email: "Not provided", phone: "Not provided" });
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

  const cardStyle = {
    backgroundColor: "#222", // Dark gray for contrast
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)",
    width: "320px",
    textAlign: "left",
    color: "white",
  };

  const labelStyle = {
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
    color: "white",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "320px",
    marginTop: "15px",
  };

  const buttonStyle = {
    padding: "10px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    flex: "1",
    margin: "5px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>About Page</h1>
        <p><span style={labelStyle}>Name:</span> {userData.name}</p>
        <p><span style={labelStyle}>Email:</span> {userData.email}</p>
        <p><span style={labelStyle}>Phone Number:</span> {userData.phone}</p>
      </div>
      <div style={buttonContainerStyle}>
        <button onClick={handleDelete} style={{ ...buttonStyle, backgroundColor: "#ff4d4d" }}>Delete</button>
        <button onClick={() => navigate("/contact")} style={{ ...buttonStyle, backgroundColor: "#007bff" }}>Back to Contact</button>
      </div>
    </div>
  );
}

export default About;
