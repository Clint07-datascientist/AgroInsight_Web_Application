import React, { useState } from 'react';
import '../styles/RegisterUser.css';

function RegisterUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('farmer'); // Default role

  const handleRegister = () => {
    // Dummy registration logic
    if (username && password) {
      // Save user data (this should be done on the server in a real application)
      console.log(`Registered user: ${username}, Role: ${role}`);
      alert('User registered successfully');
      setUsername('');
      setPassword('');
      setRole('farmer');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="register-user-container">
      <h2>Register User</h2>
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
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="farmer">Farmer</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterUser;