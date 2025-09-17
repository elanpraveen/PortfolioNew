import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-description">
            I'm always interested in new opportunities and challenging projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          <div className="contact-buttons">
            <a 
              href="mailto:elanpraveen0404@gmail.com" 
              className="contact-btn-primary"
            >
              Get In Touch
            </a>
            <a 
              href="tel:+919159347779" 
              className="contact-btn-secondary"
            >
              +91-9159347779
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2025 Praveen. All Rights Reserved.</p>
          <p className="footer-contact">
            Contact: <a href="mailto:elanpraveen0404@gmail.com" className="footer-link">elanpraveen0404@gmail.com</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;