// src/components/Footer.js
import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending to an API or email service)
    alert('Message Sent!');
  };

  return (
    <section id="contact" className="gradient-background py-5">
      <div className="container">
        <footer className="py-5 my-6">
          {/* Footer Navigation */}
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#title" className="nav-link px-2 text-light">Home</a>
            </li>
            <li className="nav-item">
              <a href="#links" className="nav-link px-2 text-light">About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link px-2 text-light">Projects</a>
            </li>
          </ul>

          {/* Contact Form Section */}
          <h3 className="text-center text-light mb-4">Contact Me</h3>
          <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-dark">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-dark">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label text-dark">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100 mt-3">Send Message</button>
          </form>

          {/* Footer text */}
          <p className="text-center text-light mt-4">© Anuvihas</p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
