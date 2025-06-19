import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted! (You can connect this to backend/email service)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea className="form-control" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-dark w-100">Send</button>
      </form>
    </div>
  );
}

export default Contact;
