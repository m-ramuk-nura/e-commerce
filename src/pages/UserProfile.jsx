import React, { useState } from "react";
import Contact from "./Contact";
import About from "./About";

function UserProfile() {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    console.log("Updating user:", userData);  // Debugging: Check if data is received
    setUser(userData);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <Contact onUpdate={updateUser} />
      {user ? <About {...user} /> : <p>No user details submitted yet.</p>}
    </div>
  );
}

export default UserProfile;
