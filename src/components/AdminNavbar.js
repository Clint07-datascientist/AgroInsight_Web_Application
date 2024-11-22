import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/AgroInsight_Logo.jpeg';

function AdminNavbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="AgroInsight Logo" />
      </div>
      <ul>
        <li><Link to="/user-management">User Management</Link></li>
        <li><Link to="/system-monitoring">System Monitoring</Link></li>
        <li><Link to="/data-analytics">Data Analytics</Link></li>
        <li><Link to="/alerts-notifications">Alerts and Notifications</Link></li>
        <li><Link to="/resource-allocation">Resource Allocation</Link></li>
        <li><Link to="/market-analysis">Market Analysis</Link></li>
        <li><Link to="/settings">Settings and Configuration</Link></li>
        <li><Link to="/support">Support and Feedback</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;