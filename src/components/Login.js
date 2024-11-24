import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Validate Admin username and password rules
      if (username.startsWith('ADMN') && username.length === 7 && password.length >= 8) {
        const response = await axios.post('http://localhost:5000/login', { username, password });
        const { token } = response.data;
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        localStorage.setItem('userRole', decodedToken.role);
        localStorage.setItem('token', token);
        if (decodedToken.role === 'farmer') {
          history.push('/dashboard');
        } else if (decodedToken.role === 'admin') {
          history.push('/admin');
        }
      } else {
        alert('Invalid Admin username or password format');
      }
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;