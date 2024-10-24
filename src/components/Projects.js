import React from 'react';

const projects = [
  {
    title: 'Checkers Game',
    description: 'A web-based checkers game built with HTML, CSS, and JavaScript.',
    imageUrl: './checkers.png', // Corrected the image filename
    link: 'https://obi2.kean.edu/~gutiermo@kean.edu/game4.html'
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A simple JavaScript Tic Tac Toe game with a Dragon Ball theme.',
    imageUrl: './dbsz.png', // Corrected the image filename
    link: 'https://obi2.kean.edu/~gutiermo@kean.edu/game1.html'
  }
];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
