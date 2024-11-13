// src/components/TitleSection.js
import React, { useEffect, useRef, useState } from 'react';

const TitleSection = () => {
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
    }, { threshold: 0.5 }); // Trigger animation when 50% of the section is visible

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="title"
      className={`gradient-background ${inView ? 'fade-in' : ''}`}
      ref={sectionRef}
    >
      <div className="container col-xxl-8 px-4 pt-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
          <img className="profile" src='/images/anuvihas.jpg' alt="Anuvihas" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Anuvihas S K</h1>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
