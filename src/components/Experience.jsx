import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Origa Technologies, Chennai',
      period: 'Feb 2024 – Present',
      points: [
        'Designed and developed responsive, accessible UIs using HTML5, CSS3, and Bootstrap for 1000+ lease management users across devices.',
        'Refactored monolithic UI into modular, component-driven architecture using React.js, React Hooks, Context API, and Redux, improving maintainability and reducing development time by 30%.',
        'Implemented dynamic content rendering and real-time updates with AJAX and Axios, reducing page reloads and improving user experience.',
        'Collaborated with backend engineers to integrate frontend components with Python (Django) services, streamlining workflows for transactions, lease approvals, and reporting.',
        'Consumed and visualized data from REST and GraphQL APIs (Django & FastAPI), powering dashboards with transaction flows, insights, and activity logs.',
        'Worked with SQL databases to fetch, filter, and display customer, lease, and financial data, supporting advanced search and personalized dashboards.',
      ],
      skills: [
        'React.js',
        'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap',
        'AJAX', 'Python (Django)',
        'SQL', 'REST APIs', 'GraphQL'
      ]
    }
  ];

  return (
    <div className="experience-wrapper">
      <section id="experience" className="experience">
        <div className="experience-container">
          <div className="experience-header">
            <h2 className="experience-title">Experience</h2>
            <p className="experience-subtitle">
              My professional journey in software development, delivering scalable applications with a focus on frontend, backend integration, and performance.
            </p>
          </div>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-marker">
                  <div className="experience-dot"></div>
                  {index < experiences.length - 1 && (
                    <div className="experience-line"></div>
                  )}
                </div>
                <div className="experience-content">
                  <div className="experience-card">
                    <div className="experience-header-info">
                      <h3 className="experience-job-title">{exp.title}</h3>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                    <h4 className="experience-company">{exp.company}</h4>

                    <ul className="experience-points">
                      {exp.points.map((point, pIndex) => (
                        <li key={pIndex}>{point}</li>
                      ))}
                    </ul>

                    <div className="experience-skills">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="experience-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
