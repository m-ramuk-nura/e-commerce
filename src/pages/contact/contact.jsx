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
    <div className="contact-page">
       <div className="contact-box">
      <h1>Enter Your Details</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
          <input type="text" name="user_name" placeholder="Name" onChange={handleChange} required  />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required  />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
          {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      ) : (
        <div style={{ color: "green", marginTop: "20px" }}>{successMessage}</div>  
      )}
    </div>
    </div>
  );
}


export default Contact;
