import React from 'react';
import FarmerNavbar from './FarmerNavbar';
import '../../styles/FarmerDashboard.css';

const FarmerDashboard = () => {
  return (
    <div className="farmer-layout">
      <FarmerNavbar />
      <div className="farmer-content">
        <h1>Welcome to Your Dashboard</h1>
        {/* Add dashboard content here */}
      </div>
    </div>
  );
};

export default FarmerDashboard;