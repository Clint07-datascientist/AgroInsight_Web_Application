import React from 'react';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
    return (
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>
        <div className="admin-section">
          <h3>Section 1</h3>
          <p>Details about section 1.</p>
        </div>
        <div className="admin-section">
          <h3>Section 2</h3>
          <p>Details about section 2.</p>
        </div>
      </div>
    );
  }
  
  export default AdminDashboard;