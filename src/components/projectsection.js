// src/components/ProjectsSection.js

import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h2 className="display-4 fw-normal">Projects</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <ProjectCard
            title="To-do list application"
            description="Developed a To-Do application using ReactJS to demonstrate fundamental React concepts. This application allows users to create, edit, and delete tasks."
            link="https://github.com/anuvihas/Todo-List-Application"
          />
          <ProjectCard
            title="QR code generator"
            description="Developed a QR Code generator application using Node.js to provide an efficient way to create and manage QR codes."
            link="https://github.com/anuvihas/QR-Code-Generator"
          />
          <ProjectCard
            title="Weather Application"
            description="Developed a Weather application using Node.js with Express.js and API to fetch weather data."
            link="https://github.com/anuvihas/Weather-Application/tree/394a38f24c58806c6021ce807f3928e68b82d2ff"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
