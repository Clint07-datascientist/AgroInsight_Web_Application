import React from 'react';
import FarmerNavbar from './FarmerNavbar';

const Notifications = () => {
  return (
    <div className="farmer-layout">
      <FarmerNavbar />
      <div className="farmer-content">
        <h1>Notifications</h1>
        {/* Add component specific content here */}
      </div>
    </div>
  );
};

export default Notifications;