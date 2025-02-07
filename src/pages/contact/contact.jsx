import { useState } from "react";
import axios from "axios";
import './contact.css'

function Contact() {
  const [formData, setFormData] = useState({ user_name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { user_name, phone, email } = formData;
    const phoneRegex = /^[0-9]{10}$/;  // Simple validation for phone number
    if (!user_name || !email || !phone) {
      setError("All fields are required.");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    axios.post("http://localhost:4000/api/data", formData)
      .then((response) => {
        setSuccessMessage(response.data.message);  // Display success message
        setSubmitted(true);  // Mark form as submitted
        setTimeout(() => {
          window.location.reload();  // Reload the page after a short delay
        }, 2000);  // Wait 2 seconds before reloading
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again.");
      });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", color: "white", backgroundColor: "#000", height: "100vh" }} className="contact-page">
      <h1>Contact Page</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
          <input type="text" name="user_name" placeholder="Name" onChange={handleChange} required style={inputStyle} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={inputStyle} />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required style={inputStyle} />
          {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      ) : (
        <div style={{ color: "green", marginTop: "20px" }}>{successMessage}</div>  
      )}
    </div>
  );
}

const inputStyle = { width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #fff", backgroundColor: "#333", color: "white" };
const buttonStyle = { width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };

export default Contact;
