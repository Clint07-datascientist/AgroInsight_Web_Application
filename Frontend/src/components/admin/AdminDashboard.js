import React from 'react';
import AdminNavbar from './AdminNavbar';
import '../../styles/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <div className="admin-content">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2><i className="fas fa-users"></i>Total Users</h2>
            <p className="stat">150</p>
            <p>Active farmers in the system</p>
          </div>

          <div className="dashboard-card">
            <h2><i className="fas fa-user-plus"></i>New Registrations</h2>
            <p className="stat">12</p>
            <p>New farmers this month</p>
          </div>

          <div className="dashboard-card">
            <h2><i className="fas fa-chart-line"></i>System Usage</h2>
            <p className="stat">85%</p>
            <p>Active user engagement</p>
          </div>

          <div className="dashboard-card">
            <h2><i className="fas fa-bell"></i>Pending Actions</h2>
            <p className="stat">5</p>
            <p>Requires your attention</p>
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-button">
              <i className="fas fa-user-plus"></i>
              Register New Farmer
            </button>
            <button className="action-button">
              <i className="fas fa-file-alt"></i>
              Generate Report
            </button>
            <button className="action-button">
              <i className="fas fa-users"></i>
              View All Users
            </button>
            <button className="action-button">
              <i className="fas fa-history"></i>
              View Audit Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;