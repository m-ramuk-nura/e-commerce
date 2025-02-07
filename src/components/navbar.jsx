import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar =() =>{
  return (
    <nav style={{ backgroundColor: '#27445D', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, justifyContent: 'space-around' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/product" style={{ color: 'white', textDecoration: 'none' }}>Product</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;