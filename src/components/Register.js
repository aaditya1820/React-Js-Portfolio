import React, { useState } from 'react';

export default function Register({ setPage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
      alert("Email already registered");
      return;
    }
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registered Successfully");
    setPage('login');
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <input className="form-control mb-2" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input className="form-control mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="form-control mb-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-success me-2" onClick={handleRegister}>Register</button>
      <button className="btn btn-secondary" onClick={() => setPage('login')}>Back to Login</button>
    </div>
  );
}
