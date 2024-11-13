// src/components/ProjectsSection.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('');

  const projects = [
    {
      title: "To-do list application",
      description: "Developed a To-Do application using ReactJS.",
      link: "https://github.com/anuvihas/Todo-List-Application",
      category: "React"
    },
    {
      title: "QR code generator",
      description: "Developed a QR Code generator application using Node.js.",
      link: "https://github.com/anuvihas/QR-Code-Generator",
      category: "Node.js"
    },
    {
      title: "Weather Application",
      description: "Developed a Weather application using Node.js with Express.",
      link: "https://github.com/anuvihas/Weather-Application",
      category: "Node.js"
    }
  ];

  const filteredProjects = projects.filter(project => 
    project.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section id="projects">
      <div className="container">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h2 className="display-4 fw-normal">Projects</h2>
          <input
            type="text"
            placeholder="Filter by category..."
            onChange={(e) => setFilter(e.target.value)}
            className="form-control mb-4"
          />
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
