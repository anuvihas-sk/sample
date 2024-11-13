// src/components/TitleSection.js
import React, { useEffect, useRef, useState } from 'react';

const TitleSection = () => {
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
      id="title"
      className={`gradient-background ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
    >
      <div className="container col-xxl-8 px-4 pt-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img className="profile" src="images/anuvihas.jpeg" alt="Anuvihas" />
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
