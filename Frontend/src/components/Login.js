import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'ADMN001' && password === 'adminpassword') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userType', 'admin');
      history.push('/admin/dashboard');
    } else if (username === 'FARMER001' && password === 'farmerpassword') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userType', 'farmer');
      history.push('/farmer/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login to Farm Management System</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;