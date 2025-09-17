import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="education-header">
          <h2 className="education-title">Education</h2>
        </div>
        <div className="education-content">
          <div className="education-item">
            <h3 className="education-degree">Bachelor of Engineering(Computer Science)</h3>
            <p className="education-school">Dhanalakshmi Srinivasan Engineering College, Perambalur</p>
            <span className="education-period">June 2019 – May 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;