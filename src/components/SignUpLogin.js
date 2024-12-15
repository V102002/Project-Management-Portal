// src/components/SignUpLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpLogin.css'; // Import CSS for styling

const SignUpLogin = () => {
  const [role, setRole] = useState('student'); // Default role
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate sign-up logic
    alert('Sign up successful! You can now log in.');
    // Clear the sign-up fields
    setUsername('');
    setEmail('');
    setPassword1('');
    setPassword2('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic
    if (username && password) {
      // Redirect based on role
      if (role === 'student') {
        navigate('/student'); // Redirect to student interface
      } else {
        navigate('/professor'); // Redirect to professor interface
      }
    } else {
      alert('Please enter your username and password.');
    }
  };

  return (
    <div className="sign-up-login-container">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div>
            <label>
              <input
                type="radio"
                value="student"
                checked={role === 'student'}
                onChange={() => setRole('student')}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                value="professor"
                checked={role === 'professor'}
                onChange={() => setRole('professor')}
              />
              Professor
            </label>
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "10px", width: "200px" }}
          />
          <br />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "10px", width: "200px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "10px", width: "200px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "10px", width: "200px" }}
          />
          <br />
          <button type="submit" style={{ padding: "10px", width: "220px" }}>
            Sign Up
          </button>
        </form>

        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "10px", width: "200px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "10px", width: "200px" }}
          />
          <br />
          <button type="submit" style={{ padding: "10px", width: "220px" }}>
            Login
          </button>
 </form>
      </div>
    </div>
  );
};

export default SignUpLogin;