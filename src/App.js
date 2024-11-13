import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleSection from './components/TitleSection';
import LinksSection from './components/LinksSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });  // This enables smooth scroll
    }
  };

  return (
    <div className="App">
      <nav className="navbar navbar-light fixed-top">
        <div className="container">
          <ul className="nav justify-content-center w-100">
            <li className="nav-item">
              <button onClick={() => scrollToSection('title')} className="nav-link">Home</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('links')} className="nav-link">About</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </li>
          </ul>
        </div>
      </nav>
      <TitleSection />
      <LinksSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
