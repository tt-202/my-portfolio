import React from "react";
import "./App.css";

// Paste your deployed feeding-robot web app URL (Vercel, Netlify, team domain, etc.).
const FEEDING_ROBOT_SITE_URL = "https://robotic-ten.vercel.app/";

// Add `your-demo.mp4` under `public/` and set the path here (e.g. "/pcb-demo.mp4"). Leave "" until the file exists.
const PCB_DEMO_VIDEO_PATH = "/PCB.mp4";

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
            I'm a Computer Engineering student at UCF obsessed with the intersection of modern web development and AI. 
            I don't just build apps — I build things that make people stop and 
            think "how did they do that?" From full-stack systems to intelligent interfaces, 
            I'm always chasing the next hard problem.
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
            <h3>Autonomous Feeding Robot Arm</h3>
            <p className="project-meta">
              UCF Senior Design I · 4-member team · Spring 2026 – July 2026 · In progress
            </p>
            <ul className="project-bullets">
              <li>
                Building an autonomous feeding robot arm with myCobot 320, NVIDIA Jetson Orin Nano,
                and a USB camera for real-time object detection and precision motion control.
              </li>
              <li>
                Developed a companion web app for monitoring and control — UI/UX design and REST API
                integration with the robot controller.
              </li>
              <li>
                Computer vision pipeline using OpenCV for food detection to guide arm positioning and
                grasping sequences.
              </li>
              <li>
                Project website published; full system delivery on schedule for July 2026.
              </li>
            </ul>
            <div className="tech-stack">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">OpenCV</span>
              <span className="tech-tag">myCobot 320 API</span>
              <span className="tech-tag">Jetson Orin Nano</span>
              <span className="tech-tag">REST APIs</span>
            </div>
            {FEEDING_ROBOT_SITE_URL ? (
              <a
                className="project-external-link"
                href={FEEDING_ROBOT_SITE_URL}
                target="_blank"
                rel="noreferrer"
              >
                Visit feeding robot project site →
              </a>
            ) : null}
            <span className="project-card-note">Senior design · ongoing</span>
          </div>

          <div className="project-card">
            <h3>Custom PCB Design — LCD &amp; Distance Sensor</h3>
            <p className="project-meta">UCF Junior Design · Fall 2025</p>
            <ul className="project-bullets">
              <li>
                Designed a custom PCB in Fusion 360: schematic capture, routed layout, verified
                footprints, and assembled the prototype.
              </li>
              <li>
                Integrated an LCD and ultrasonic distance sensor; validated live readings on-screen
                after assembly.
              </li>
              <li>
                End-to-end hardware flow: requirements → schematic → layout → build → functional test.
              </li>
            </ul>
            <div className="tech-stack">
              <span className="tech-tag">Fusion 360</span>
              <span className="tech-tag">PCB Design</span>
              <span className="tech-tag">LCD</span>
              <span className="tech-tag">Ultrasonic Sensor</span>
            </div>
            {PCB_DEMO_VIDEO_PATH ? (
              <div className="project-video-wrap">
                <video
                  className="project-video"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="PCB prototype demo video"
                >
                  <source src={PCB_DEMO_VIDEO_PATH} type="video/mp4" />
                </video>
                <p className="project-video-caption">Mini demo — bring-up, LCD, and distance readings</p>
              </div>
            ) : null}
            <span className="project-card-note">Junior design · complete</span>
          </div>

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
        </div>
      </section>

      {/* Resume Section */}
      <section className="section resume-section">
        <h2>Resume</h2>
        <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.1rem' }}>
          Download my detailed resume to learn more about my experience, skills, and achievements.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/TuyenTran_2026.pdf" target="_blank" rel="noreferrer" className="resume-button">
            📄 View Resume
          </a>
          <a href="/TuyenTran_2026.pdf" download className="resume-button" style={{ background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)' }}>
            💾 Download PDF
          </a>
        </div>
      </section>

      {/* Recommendation Letter Section */}
      <section className="section">
        <h2>Recommendation Letter</h2>
        <p style={{ marginBottom: '2rem', color: '#4a5568', fontSize: '1.1rem' }}>
          A professional recommendation highlighting my skills, work ethic, and contributions.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/recommendation_letter.pdf" target="_blank" rel="noreferrer" className="resume-button">
            📖 View Letter
          </a>
          <a href="/recommendation_letter.pdf" download className="resume-button" style={{ background: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)' }}>
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
            <a href="mailto:tuyenngoctran.tt26@gmail.com">tuyenngoctran.tt26@gmail.com</a>
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
