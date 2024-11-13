// src/components/Footer.js
import React from 'react';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <section id="contact" className="gradient-background">
      <div className="container">
        <footer className="py-3 my-6">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#title" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#links" className="nav-link px-2 text-body-secondary">About</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link px-2 text-body-secondary">Projects</a></li>
          </ul>
          <ContactForm />
          <p className="text-center text-body-secondary">© Anuvihas</p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
