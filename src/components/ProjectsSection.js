// src/components/ProjectsSection.js
import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

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
