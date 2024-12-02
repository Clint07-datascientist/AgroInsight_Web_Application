import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/admin/AdminDashboard';
import UserRegister from './components/admin/UserRegister';
import UserManagement from './components/admin/UserManagement';
import AuditLogs from './components/admin/AuditLogs';
import GenerateReports from './components/admin/GenerateReports';
import FarmerDashboard from './components/farmer/FarmerDashboard';
import SoilHealth from './components/farmer/SoilHealth';
import Weather from './components/farmer/Weather';
import CropHealth from './components/farmer/CropHealth';
import ResourceManagement from './components/farmer/ResourceManagement';
import MarketInfo from './components/farmer/MarketInfo';
import Notifications from './components/farmer/Notifications';
import Reports from './components/farmer/Reports';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Switch>
        {/* Root path should show LandingPage */}
        <Route exact path="/" component={LandingPage} />

        {/* Login route */}
        <Route exact path="/login" component={Login} />
        
        {/* Admin Routes */}
        <Route path="/admin">
          <ProtectedRoute requiredRole="admin">
            <Switch>
              <Route exact path="/admin/dashboard" component={AdminDashboard} />
              <Route exact path="/admin/register" component={UserRegister} />
              <Route exact path="/admin/users" component={UserManagement} />
              <Route exact path="/admin/audit" component={AuditLogs} />
              <Route exact path="/admin/reports" component={GenerateReports} />
              {/* Redirect /admin to /admin/dashboard */}
              <Route exact path="/admin">
                <Redirect to="/admin/dashboard" />
              </Route>
            </Switch>
          </ProtectedRoute>
        </Route>

        {/* Farmer Routes */}
        <Route path="/farmer">
          <ProtectedRoute requiredRole="farmer">
            <Switch>
              <Route exact path="/farmer/dashboard" component={FarmerDashboard} />
              <Route exact path="/farmer/soil-health" component={SoilHealth} />
              <Route exact path="/farmer/weather" component={Weather} />
              <Route exact path="/farmer/crop-health" component={CropHealth} />
              <Route exact path="/farmer/resources" component={ResourceManagement} />
              <Route exact path="/farmer/market" component={MarketInfo} />
              <Route exact path="/farmer/notifications" component={Notifications} />
              <Route exact path="/farmer/reports" component={Reports} />
              {/* Redirect /farmer to /farmer/dashboard */}
              <Route exact path="/farmer">
                <Redirect to="/farmer/dashboard" />
              </Route>
            </Switch>
          </ProtectedRoute>
        </Route>

        {/* 404 Route */}
        <Route path="*">
          <div>
            <h1>404 - Page Not Found</h1>
            <Link to="/">Go to Home</Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;