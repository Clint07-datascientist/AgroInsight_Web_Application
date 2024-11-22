import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.css';
import Dashboard from './components/Dashboard';
import SoilHealth from './components/SoilHealth';
import Weather from './components/Weather';
import CropHealth from './components/CropHealth';
import ResourceManagement from './components/ResourceManagement';
import MarketInfo from './components/MarketInfo';
import Notifications from './components/Notifications'; // Ensure this import is correct
import Reports from './components/Reports';
import UserManagement from './components/UserManagement';
import SystemMonitoring from './components/SystemMonitoring';
import DataAnalytics from './components/DataAnalytics';
import AlertsNotifications from './components/AlertsNotifications';
import ResourceAllocation from './components/ResourceAllocation';
import MarketAnalysis from './components/MarketAnalysis';
import Settings from './components/Settings';
import Support from './components/Support';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import FarmerNavbar from './components/FarmerNavbar';
import AdminNavbar from './components/AdminNavbar';
import LandingPage from './components/LandingPage';

function App() {
  const userRole = localStorage.getItem('userRole');

  return (
    <Router>
      <div className="App">
        {userRole === 'farmer' && <FarmerNavbar />}
        {userRole === 'admin' && <AdminNavbar />}
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
          <Route path="/notifications">
            {userRole === 'farmer' ? <Notifications /> : <Redirect to="/login" />}
          </Route>
          <Route path="/reports">
            {userRole === 'farmer' ? <Reports /> : <Redirect to="/login" />}
          </Route>
          <Route path="/user-management">
            {userRole === 'admin' ? <UserManagement /> : <Redirect to="/login" />}
          </Route>
          <Route path="/system-monitoring">
            {userRole === 'admin' ? <SystemMonitoring /> : <Redirect to="/login" />}
          </Route>
          <Route path="/data-analytics">
            {userRole === 'admin' ? <DataAnalytics /> : <Redirect to="/login" />}
          </Route>
          <Route path="/alerts-notifications">
            {userRole === 'admin' ? <AlertsNotifications /> : <Redirect to="/login" />}
          </Route>
          <Route path="/resource-allocation">
            {userRole === 'admin' ? <ResourceAllocation /> : <Redirect to="/login" />}
          </Route>
          <Route path="/market-analysis">
            {userRole === 'admin' ? <MarketAnalysis /> : <Redirect to="/login" />}
          </Route>
          <Route path="/settings">
            {userRole === 'admin' ? <Settings /> : <Redirect to="/login" />}
          </Route>
          <Route path="/support">
            {userRole === 'admin' ? <Support /> : <Redirect to="/login" />}
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