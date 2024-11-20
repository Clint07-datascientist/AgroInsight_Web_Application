import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.css';
import Dashboard from './components/Dashboard';
import SoilHealth from './components/SoilHealth';
import Weather from './components/Weather';
import CropHealth from './components/CropHealth';
import ResourceManagement from './components/ResourceManagement';
import MarketInfo from './components/MarketInfo';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
  const userRole = localStorage.getItem('userRole');

  return (
    <Router>
      <div className="App">
        {userRole && <Navbar />} {/* Conditionally render Navbar based on user role */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard">
            {userRole === 'farmer' ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/soil-health">
            {userRole === 'farmer' ? <SoilHealth /> : <Redirect to="/login" />}
          </Route>
          <Route path="/weather">
            {userRole === 'farmer' ? <Weather /> : <Redirect to="/login" />}
          </Route>
          <Route path="/crop-health">
            {userRole === 'farmer' ? <CropHealth /> : <Redirect to="/login" />}
          </Route>
          <Route path="/resource-management">
            {userRole === 'farmer' ? <ResourceManagement /> : <Redirect to="/login" />}
          </Route>
          <Route path="/market-info">
            {userRole === 'farmer' ? <MarketInfo /> : <Redirect to="/login" />}
          </Route>
          <Route path="/admin">
            {userRole === 'admin' ? <AdminDashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/" exact component={LandingPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;