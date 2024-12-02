import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import '../../styles/FarmerNavbar.css';

const FarmerNavbar = () => {
  const location = useLocation();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    history.push('/login');
  };

  return (
    <div className="farmer-sidebar">
      <div className="sidebar-header">
        <h2>AgroInsight</h2>
        <p>Farmer Portal</p>
      </div>
      
      <nav className="sidebar-nav">
        <Link 
          to="/farmer/dashboard" 
          className={`nav-item ${location.pathname === '/farmer/dashboard' ? 'active' : ''}`}
        >
          <i className="fas fa-home"></i>
          Dashboard
        </Link>

        <Link 
          to="/farmer/soil-health" 
          className={`nav-item ${location.pathname === '/farmer/soil-health' ? 'active' : ''}`}
        >
          <i className="fas fa-seedling"></i>
          Soil Health
        </Link>

        <Link 
          to="/farmer/weather" 
          className={`nav-item ${location.pathname === '/farmer/weather' ? 'active' : ''}`}
        >
          <i className="fas fa-cloud-sun"></i>
          Weather
        </Link>

        <Link 
          to="/farmer/crop-health" 
          className={`nav-item ${location.pathname === '/farmer/crop-health' ? 'active' : ''}`}
        >
          <i className="fas fa-leaf"></i>
          Crop Health
        </Link>

        <Link 
          to="/farmer/resources" 
          className={`nav-item ${location.pathname === '/farmer/resources' ? 'active' : ''}`}
        >
          <i className="fas fa-tools"></i>
          Resource Management
        </Link>

        <Link 
          to="/farmer/market" 
          className={`nav-item ${location.pathname === '/farmer/market' ? 'active' : ''}`}
        >
          <i className="fas fa-store"></i>
          Market Info
        </Link>

        <Link 
          to="/farmer/notifications" 
          className={`nav-item ${location.pathname === '/farmer/notifications' ? 'active' : ''}`}
        >
          <i className="fas fa-bell"></i>
          Notifications
        </Link>

        <Link 
          to="/farmer/reports" 
          className={`nav-item ${location.pathname === '/farmer/reports' ? 'active' : ''}`}
        >
          <i className="fas fa-chart-bar"></i>
          Reports
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

export default FarmerNavbar;