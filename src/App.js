import React from 'react';
import Dashboard from './components/Dashboard';
import SoilHealth from './components/SoilHealth';
import Weather from './components/Weather';
import CropHealth from './components/CropHealth';
import ResourceManagement from './components/ResourceManagement';
import MarketInfo from './components/MarketInfo';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <SoilHealth />
      <Weather />
      <CropHealth />
      <ResourceManagement />
      <MarketInfo />
    </div>
  );
}

export default App;
