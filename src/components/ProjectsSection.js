// src/components/ProjectsSection.js
import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="projects"
      className={`container ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
    >
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h2 className="display-4 fw-normal">Projects</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <ProjectCard
          title="To-do list application"
          description="Developed a To-Do application using ReactJS."
          link="https://github.com/anuvihas/Todo-List-Application"
        />
        {/* More Project Cards */}
      </div>
    </section>
  );
};

export default ProjectsSection;
