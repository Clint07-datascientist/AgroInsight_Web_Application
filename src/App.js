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

function App() {
  const userRole = localStorage.getItem('userRole');

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard">
            {userRole === 'farmer' ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/soil-health" component={SoilHealth} />
          <Route path="/weather" component={Weather} />
          <Route path="/crop-health" component={CropHealth} />
          <Route path="/resource-management" component={ResourceManagement} />
          <Route path="/market-info" component={MarketInfo} />
          <Route path="/admin">
            {userRole === 'admin' ? <AdminDashboard /> : <Redirect to="/login" />}
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;