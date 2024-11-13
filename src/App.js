// src/App.js

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TitleSection from './components/TitleSection';
import LinksSection from './components/LinksSection';
import ProjectCard from './components/ProjectCard';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TitleSection />
      <LinksSection />
      <ProjectCard />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
