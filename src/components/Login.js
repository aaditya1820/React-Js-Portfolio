import React, { useState } from 'react';

export default function Login({ onLogin, setPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const match = users.find(user => user.email === email && user.password === password);   // email == aadimanishajitu1122@gmail.com $$ pw == aaditya96@patel
    if (match) {
      onLogin(match);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Welcome Back!</h2>
          <p className="text-muted">Login to continue</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="e.g. aaditya@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 mb-2" onClick={handleSubmit}>
          Login
        </button>
        <div className="text-center">
          <small className="text-muted">Don't have an account?</small>
          <br />
          <button className="btn btn-link" onClick={() => setPage('register')}>
            Register Here
          </button>
        </div>
      </div>
    </div>
  );
}
