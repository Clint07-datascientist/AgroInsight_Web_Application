import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/soil-health">Soil Health</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/crop-health">Crop Health</Link></li>
        <li><Link to="/resource-management">Resource Management</Link></li>
        <li><Link to="/market-info">Market Info</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;