import React from 'react';
import FarmerNavbar from './FarmerNavbar';

const CropHealth = () => {
  return (
    <div className="farmer-layout">
      <FarmerNavbar />
      <div className="farmer-content">
        <h1>CropHealth</h1>
        {/* Add component specific content here */}
      </div>
    </div>
  );
};

export default CropHealth;