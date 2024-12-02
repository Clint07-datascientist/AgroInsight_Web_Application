import React from 'react';
import FarmerNavbar from './FarmerNavbar';

const ResourceManagement = () => {
  return (
    <div className="farmer-layout">
      <FarmerNavbar />
      <div className="farmer-content">
        <h1>ResourceManagement</h1>
        {/* Add component specific content here */}
      </div>
    </div>
  );
};

export default ResourceManagement;