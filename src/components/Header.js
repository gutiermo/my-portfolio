import React from 'react';
import './YourStyles.css'; // Ensure this imports your updated styles

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Welcome to My Portfolio!</h1>
          <h2>I am Moises Gutierrez</h2>
          
          <a href="/Resume.pdf" className="cta-button" target="_blank" rel="noopener noreferrer">
  Resume
</a>

        </div>
        <img
          src="./me.jpg"
          alt="Profile"
          className="profile-image"
        />
      </header>
      
      
    </div>
  );
}

export default App;
