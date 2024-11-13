// src/components/LinksSection.js
import React, { useEffect, useRef, useState } from 'react';

const LinksSection = () => {
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
      id="links"
      className={`my-1 ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
    >
      <div className="p-5 text-center bg-body-tertiary">
        <div className="container py-5">
          <h2 className="text-body-emphasis">"Opportunities don't happen, you create them"</h2>
          <img className="profile" src="images/anuvihas.jpeg" alt="Anuvihas S K" />
          <p className="col-lg-8 mx-auto lead mt-2">India</p>
        </div>
        <div className="container">
          <div className="row">
            {/* Social Icons */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
