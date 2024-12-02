import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import '../../styles/AdminNavbar.css';

const AdminNavbar = () => {
  const location = useLocation();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    history.push('/login');
  };

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>AgroInsight</h2>
        <p>Admin Portal</p>
      </div>
      
      <nav className="sidebar-nav">
        <Link 
          to="/admin/dashboard" 
          className={`nav-item ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}
        >
          <i className="fas fa-home"></i>
          Dashboard
        </Link>

        <Link 
          to="/admin/register" 
          className={`nav-item ${location.pathname === '/admin/register' ? 'active' : ''}`}
        >
          <i className="fas fa-user-plus"></i>
          User Register
        </Link>

        <Link 
          to="/admin/users" 
          className={`nav-item ${location.pathname === '/admin/users' ? 'active' : ''}`}
        >
          <i className="fas fa-users"></i>
          User Management
        </Link>

        <Link 
          to="/admin/audit" 
          className={`nav-item ${location.pathname === '/admin/audit' ? 'active' : ''}`}
        >
          <i className="fas fa-history"></i>
          Audit Logs
        </Link>

        <Link 
          to="/admin/reports" 
          className={`nav-item ${location.pathname === '/admin/reports' ? 'active' : ''}`}
        >
          <i className="fas fa-chart-line"></i>
          Generate Reports
        </Link>
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-btn">
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;