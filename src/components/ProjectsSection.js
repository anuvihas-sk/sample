// src/components/ProjectsSection.js
import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default is 'All'

  const projects = [
    {
      title: 'To-do list Application',
      description: 'Developed a To-Do application using ReactJS.',
      link: 'https://github.com/anuvihas/Todo-List-Application',
      category: 'Web Development',
    },
    {
      title: 'Weather Application',
      description: 'Created a weather forecasting application using OpenWeatherMap API and React.',
      link: 'https://github.com/anuvihas/Weather-App',
      category: 'Web Development',
    },
    {
      title: 'Chat Application',
      description: 'Developed a full-stack e-commerce website using React, Node.js, and MongoDB.',
      link: 'https://github.com/anuvihas/Ecommerce-Site',
      category: 'Web Development',
    },
    {
      title: 'QR Code Generator',
      description: 'Created a QR code generator application using React.',
      link: 'https://github.com/anuvihas/QR-Code-Generator',
      category: 'Web Development',
    },
    {
      title: 'Authentication Application',
      description: 'Developed an authentication application using React and Firebase.',
      link: 'https://github.com/anuvihas/Authentication-App',
      category: 'Mobile Apps',
    },
  ];

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      });
    }, { threshold: 0.5 });

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="projects"
      className={`container ${inView ? 'fade-in' : ''}`}
      ref={sectionRef}
    >
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h2 className="display-4 fw-normal">Projects</h2>

        {/* Category Filter Section */}
        <div className="btn-group" role="group" aria-label="Category Filter">
          <button
            type="button"
            className={`btn ${selectedCategory === 'All' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          <button
            type="button"
            className={`btn ${selectedCategory === 'Web Development' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setSelectedCategory('Web Development')}
          >
            Web Development
          </button>
          <button
            type="button"
            className={`btn ${selectedCategory === 'Mobile Apps' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setSelectedCategory('Mobile Apps')}
          >
            Mobile Apps
          </button>
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="project-grid">
        {/* Render Project Cards based on the selected category */}
        {filteredProjects.map((project, index) => (
          <div className="project-item" key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
