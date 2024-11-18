import React from 'react';
import '../styles/AdminDashboard.css';
import RegisterUser from './RegisterUser';

function AdminDashboard() {
    return (
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>
        <div className="admin-section">
          <h3>Register New User</h3>
          <RegisterUser />
        </div>
        {/* Add other admin-specific sections here */}
      </div>
    );
  }
  
  export default AdminDashboard;