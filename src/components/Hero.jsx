import React from 'react';
import './Hero.css';

const Hero = () => {
  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '2+', label: 'Projects Done' },
    { value: '500+', label: 'Active Users' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>👋</span>
            <span>Hello, I'm Praveen</span>
          </div>
          
          <h1 className="hero-title">
            Hello, I'm <br />
            <span className="hero-highlight">Praveen</span>
          </h1>
          
          <p className="hero-subtitle">
            I am a Software Developer
          </p>
          
          <p className="hero-description">
           I am a passionate web developer with hands-on experience in designing and building responsive, interactive, and data-driven web applications. My core strength lies in frontend development using modern web standards, while also contributing to backend functionality with Python and Django.
          </p>

          {/* <div className="hero-buttons">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="btn-secondary">
              <span className="play-icon">▶</span>
              View Projects
            </button>
          </div> */}

          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-avatar">
              {/* <div className="hero-avatar-placeholder">P</div> */}
              <img src="/Praveen.jpg" alt="My Avatar" className="hero-avatar-img" />
            </div>
            {/* <div className="floating-card">
              <div className="card-icon">💼</div>
              <div className="card-content">
                <div className="card-title">Software Developer</div>
                <div className="card-subtitle">Development</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      
      <div className="hero-bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;