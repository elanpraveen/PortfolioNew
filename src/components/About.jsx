import React from 'react';
import { Star, Code, Braces, Globe, Database } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-card-section">
            <div className="about-card">
              <div className="about-card-header">
                <div className="about-avatar">P</div>
                <div className="about-card-info">
                  <h3 className="about-card-title">I am a Software Developer</h3>
                  <p className="about-card-subtitle">Frontend Specialist</p>
                </div>
              </div>
              <p className="about-card-description">
                I have experience in building responsive web applications using modern technologies 
                like React.js, JavaScript, and various CSS frameworks.
              </p>
              <div className="about-rating">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="about-star" />
                ))}
              </div>
              {/* <button className="about-card-btn">
                Download CV
              </button> */}
              <a href="/Praveen Resume New.pdf" download="Praveen_Resume.pdf">
                <button className="about-card-btn">Download CV</button>
              </a>

            </div>
          </div>

          <div className="about-text-section">
            <h2 className="about-title">
              I am a Software <br />
              Developer
            </h2>
            <p className="about-description">
              I have experience in frontend development with a focus on creating 
              responsive and user-friendly web applications using modern technologies 
              and best practices.
            </p>
            
            <div className="about-skills">
              <div className="about-skills-column">
                <div className="about-skill">
                  <div className="about-skill-icon">
                    <Code className="about-icon" />
                  </div>
                  <span className="about-skill-text">Development</span>
                </div>
                <div className="about-skill">
                  <div className="about-skill-icon">
                    <Braces className="about-icon" />
                  </div>
                  <span className="about-skill-text">JavaScript</span>
                </div>
              </div>
              <div className="about-skills-column">
                <div className="about-skill">
                  <div className="about-skill-icon">
                    <Globe className="about-icon" />
                  </div>
                  <span className="about-skill-text">Web Design</span>
                </div>
                <div className="about-skill">
                  <div className="about-skill-icon">
                    <Database className="about-icon" />
                  </div>
                  <span className="about-skill-text">API Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;