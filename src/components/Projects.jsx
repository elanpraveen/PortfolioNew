import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { 
      title: 'Lease Management System', 
      category: 'Web Application', 
      image: 'gradient-orange',
      description: `Developed a responsive, component-driven frontend with JavaScript, 
      Bootstrap, and jQuery. Optimized dashboards using virtualized tables, 
      integrated AJAX with Django APIs, and worked with SQL databases for 
      business and credit data.`,
      tech: ['Javascript', 'jQuery', 'AJAX', 'Django', 'Postgresql','GraphQL','REST APIs']
    },
    { 
      title: 'Origa Market', 
      category: 'Market Platform', 
      image: 'gradient-blue',
      description: `Built a modular frontend using React.js and Bootstrap, integrated 
      REST and GraphQL APIs, implemented secure authentication, and 
      optimized state management for a scalable and responsive platform.`,
      tech: ['React.js', 'Bootstrap', 'HTML5', 'CSS3', 'GraphQL', 'REST APIs','Tailwind']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            Some of the key projects I've worked on, showcasing modern web development 
            techniques and real-world problem solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="projects-card">
              <div className="projects-card-inner">
                <div className={`projects-image ${project.image}`}>
                  <div className="projects-overlay">
                    {/* <div className="projects-overlay-content">
                      <ExternalLink className="projects-icon" />
                      <p className="projects-view-text">View Project</p>
                    </div> */}
                  </div>
                </div>
                <div className="projects-content">
                  <h3 className="projects-card-title">{project.title}</h3>
                  <p className="projects-category">{project.category}</p>
                  <p className="projects-description">{project.description}</p>
                  <div className="projects-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="projects-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="projects-card-footer">
                    {/* <button className="projects-case-study-btn">
                      Case Study
                    </button> */}
                    <div className="projects-dots">
                      <div className="projects-dot projects-dot-purple"></div>
                      <div className="projects-dot projects-dot-pink"></div>
                      <div className="projects-dot projects-dot-blue"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="projects-footer">
          <button className="projects-view-all-btn">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
