import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/AgroInsight_Logo.jpeg';

function FarmerNavbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="AgroInsight Logo" />
      </div>
      <ul>
        <li><Link to="/dashboard">Overview</Link></li>
        <li><Link to="/soil-health">Soil Health</Link></li>
        <li><Link to="/crop-health">Crop Health</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/resource-management">Resource Management</Link></li>
        <li><Link to="/market-info">Market Info</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default FarmerNavbar;