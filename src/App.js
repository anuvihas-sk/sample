// src/App.js

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TitleSection from './components/titleSection';
import LinksSection from './components/linkSection';
import ProjectsSection from './components/projectSection';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <titleSection />
      <linksSection />
      <projectsSection />
      <footer />
    </div>
  );
}

export default App;
