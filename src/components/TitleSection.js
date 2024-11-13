// src/components/TitleSection.js
import React from 'react';
import { useTheme } from './ThemeContext';

const TitleSection = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <section id="title" className="gradient-background">
      <div className="container col-xxl-8 px-4 pt-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img className="profile" src="images/anuvihas.jpeg" alt="Anuvihas" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Anuvihas S K</h1>
            <p>Web Developer</p>
            <button onClick={toggleTheme} className="btn btn-outline-light btn-sm mt-2">
              Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
