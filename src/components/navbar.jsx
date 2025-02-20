import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

export const Navbar =() =>{
  return (
    <nav >
      <ul >
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/product" >Product</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><Link to="/about" >About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;