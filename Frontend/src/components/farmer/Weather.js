import React from 'react';
import FarmerNavbar from './FarmerNavbar';

const Weather = () => {
  return (
    <div className="farmer-layout">
      <FarmerNavbar />
      <div className="farmer-content">
        <h1>Weather</h1>
        {/* Add component specific content here */}
      </div>
    </div>
  );
};

export default Weather;