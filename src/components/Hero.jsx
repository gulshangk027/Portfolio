import React from 'react';
import { Mail, FileDown, ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';
import { profile } from '../data/profile';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-intro-header">
            <div className="hero-profile-photo">
              <img src="/profile.jpg" alt="Gulshan Kumar — Electronics and Communication Engineering student" />
            </div>
            <div className="hero-titles">
              <h2 className="greeting">HELLO, I'M</h2>
              <h1 className="name">{profile.name.toUpperCase()}</h1>
            </div>
          </div>
          <h3 className="headline">
            ECE Student Building at the Intersection of Electronics, Software & AI.
          </h3>
          <p className="subheadline">
            <strong>B.Tech {profile.batch} | Embedded Systems | Software Development | Artificial Intelligence</strong>
          </p>
          <p className="description">
            Electronics & Communication Engineering student passionate about building practical solutions across embedded systems, software development and AI. I enjoy turning ideas into working prototypes, learning emerging technologies and solving real-world problems.
          </p>

          <div className="hero-badge">
            <div className="badge-highlight">✦ GRAND FINALE SHORTLISTED</div>
            <div className="badge-details">
              <span>Bank of India CyberShield Hackathon 2026</span>
              <span className="badge-dot">•</span>
              <span>IIT Hyderabad</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore My Projects
              <ArrowRight size={18} />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FileDown size={18} />
              View Resume
            </a>
          </div>

          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={22} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={22} />
            </a>
            <a href={`mailto:${profile.email}`} className="social-icon">
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="terminal">
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <div className="terminal-title">profile.js</div>
            </div>
            <div className="terminal-body">
              <pre>
                <code>
<span className="keyword">const</span> <span className="variable">gulshan</span> = {'{'}
<br/>  <span className="property">branch</span>: <span className="string">"ECE"</span>,
<br/>  <span className="property">batch</span>: <span className="string">"2027"</span>,
<br/>
<br/>  <span className="property">focus</span>: [
<br/>    <span className="string">"Embedded Systems"</span>,
<br/>    <span className="string">"Software"</span>,
<br/>    <span className="string">"AI"</span>
<br/>  ],
<br/>
<br/>  <span className="property">mindset</span>: <span className="string">"Build • Learn • Ship"</span>
<br/>{'}'};
                </code>
              </pre>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="glow-node top-right"></div>
          <div className="glow-node bottom-left"></div>
          <div className="circuit-lines"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
