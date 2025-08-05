import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Tuyen Tran</h1>
            <div className="subtitle">Computer Engineering Student</div>
            <p className="tagline">
              Passionate about building innovative web applications and leveraging AI tools 
              to create impactful solutions. Currently pursuing Computer Engineering at UCF 
              with a focus on modern web technologies and artificial intelligence.
            </p>
          </div>
          <img 
            src="/profile.png" 
            alt="Tuyen Tran" 
            className="profile-image"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>React Ingredients Substitutions</h3>
            <p>
              A comprehensive web application that helps users find ingredient substitutions 
              and discover new recipes. Built with modern React practices and responsive design.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">Vercel</span>
            </div>
            <a href="https://ingredient-tuyentrans-projects.vercel.app" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
          
          <div className="project-card">
            <h3>Web Application Project</h3>
            <p>
              A modern web application showcasing full-stack development skills with 
              responsive design and interactive features. Demonstrates proficiency in 
              contemporary web technologies and best practices.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">mySQL</span>
              <span className="tech-tag">Render</span>
            </div>
            <a href="https://project4-5gdk.onrender.com/" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
          
          {/* Add more project cards here as you complete more projects */}
        </div>
      </section>

      {/* Resume Section */}
      <section className="section resume-section">
        <h2>Resume</h2>
        <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.1rem' }}>
          Download my detailed resume to learn more about my experience, skills, and achievements.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume-button">
            📄 View Resume
          </a>
          <a href="/resume.pdf" download className="resume-button" style={{ background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)' }}>
            💾 Download PDF
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2>Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <span>📧</span>
            <a href="mailto:tuyentran02@yahoo.com">tuyentran02@yahoo.com</a>
          </div>
          <div className="contact-item">
            <span>💼</span>
            <a href="https://github.com/tt-202" target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
          </div>
          <div className="contact-item">
            <span>🔗</span>
            <a href="https://www.linkedin.com/in/tuyen-tran-285949231/" target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
