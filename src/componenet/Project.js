import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Apple Website Clone',
    description: 'A responsive frontend clone of the Apple website, showcasing a sleek design and interactive features, built using HTML, CSS, JS.',
    image: 'apple.png',
    link: "https://github.com/FATHIMA-S-DEV/Apple-Website-Clone", // Make sure the local server is running
    demo: "http://127.0.0.1:3001/apple1.html", // Ensure this points to the correct demo URL
  },
  {
    title: 'Instastop Blade Machinery',
    description: 'A smart saw-cutting machine that uses AI sensors to detect hands and automatically stop, enhancing safety during wood cutting.',
    image: 'wood.png',
    link: "https://example.com/instastop",
    demo: "https://example.com/demo/instastop",
  },
  {
    title: 'Two-Wheeler E-Commerce Website',
    description: 'An online platform for buying and selling two-wheelers with a user-friendly design, developed during my internship at NxtLogic.',
    image: 'Twowheeler.png',
    link: "https://example.com/twowheeler",
    demo: "https://example.com/demo/twowheeler",
  },
  {
    title: 'Pepper Spray Alerting Necklace',
    description: 'A safety device that alerts users and bystanders when activated, enhancing personal security.',
    image: 'pepper.jpeg',
    link: "https://example.com/pepper-spray",
    demo: "https://example.com/demo/pepper-spray",
  },
];

const Project = () => {
  const handleLearnMoreClick = (url) => {
    window.open(url, '_blank'); // Opens the link in a new tab
  };

  const handleDemoClick = (url) => {
    window.open(url, '_blank'); // Opens the demo link in a new tab
  };

  return (
    <div className="projects-container" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="projects-section">
          {projects.slice(0, 2).map((project, index) => (
            <div className="project-card" key={index}>
              <img className="project-image" src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="button-container">
                <button 
                  className="learn-more-btn" 
                  onClick={() => handleLearnMoreClick(project.link)}
                >
                  Learn More
                </button>
                <button 
                  className="demo-btn" 
                  onClick={() => handleDemoClick(project.demo)}
                >
                  View Demo
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-section">
          {projects.slice(2, 4).map((project, index) => (
            <div className="project-card" key={index}>
              <img className="project-image" src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="button-container">
                <button 
                  className="learn-more-btn" 
                  onClick={() => handleLearnMoreClick(project.link)}
                >
                  Learn More
                </button>
                <button 
                  className="demo-btn" 
                  onClick={() => handleDemoClick(project.demo)}
                >
                  View Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
