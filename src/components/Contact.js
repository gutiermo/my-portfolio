import React from 'react';
import './styles.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      
      <div className="social-links">
        <h3 className="connect-title">Connect with me:</h3>
        <ul className="contact-list">
          <li>
            <a href="https://www.linkedin.com/in/moises-gutierrez-603454240/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/gutiermo" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:gutiermo@kean.edu">
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
