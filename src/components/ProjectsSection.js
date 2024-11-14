// src/components/ProjectsSection.js
import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default is 'All'

  const projects = [
    {
      title: 'To-do list application',
      description: 'Developed a To-Do application using ReactJS.',
      link: 'https://github.com/anuvihas/Todo-List-Application',
      category: 'Web Development',
    },
    {
      title: 'Weather App',
      description: 'Created a weather forecasting application using OpenWeatherMap API and React.',
      link: 'https://github.com/anuvihas/Weather-App',
      category: 'Web Development',
    },
    {
      title: 'Chat App',
      description: 'Developed a full-stack e-commerce website using React, Node.js, and MongoDB.',
      link: 'https://github.com/anuvihas/Ecommerce-Site',
      category: 'Web Development',
    },
    {
      title: 'QR Code Generator',
      description: 'Built a personal portfolio website to showcase skills, projects, and experience.',
      link: 'https://github.com/anuvihas/Portfolio',
      category: 'Web Development',
    },
    {
      title: 'Machine Learning Model',
      description: 'Built a machine learning model for predicting house prices using Python and scikit-learn.',
      link: 'https://github.com/anuvihas/ML-House-Prices',
      category: 'Data Science',
    },
    {
      title: 'Mobile Expense Tracker',
      description: 'Developed a mobile app for expense tracking using Flutter and Firebase.',
      link: 'https://github.com/anuvihas/Expense-Tracker',
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
          <button
            type="button"
            className={`btn ${selectedCategory === 'Data Science' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setSelectedCategory('Data Science')}
          >
            Data Science
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
