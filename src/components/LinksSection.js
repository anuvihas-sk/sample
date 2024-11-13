// src/components/LinksSection.js
import React, { useEffect, useRef, useState } from 'react';

const LinksSection = () => {
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
      id="links"
      className={`my-1 ${inView ? 'fade-in' : ''}`}
      ref={sectionRef}
    >
      <div className="p-5 text-center bg-body-tertiary">
        <div className="container py-5">
          <h2 className="text-body-emphasis">"Opportunities don't happen, you create them"</h2>
          <img className="profile1" src="/images/anuvihas.jpg" alt="Anuvihas S K" />
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
