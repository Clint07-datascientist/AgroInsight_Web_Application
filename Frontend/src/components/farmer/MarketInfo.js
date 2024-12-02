import React from 'react';
import FarmerNavbar from './FarmerNavbar';

const MarketInfo = () => {
  return (
    <div className="farmer-layout">
      <FarmerNavbar />
      <div className="farmer-content">
        <h1>MarketInfo</h1>
        {/* Add component specific content here */}
      </div>
    </div>
  );
};

export default MarketInfo;