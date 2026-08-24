import React from 'react';
import { Mail, FileDown, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';
import { profile } from '../data/profile';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      {/* Resume CTA */}
      <div className="resume-cta">
        <h3>Want the complete picture?</h3>
        <p>
          Download my resume for a concise overview of my education, technical skills, projects, certifications and experience.
        </p>
        <div className="resume-cta-buttons">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-resume-cta">
            <FileDown size={20} />
            View Full Resume
          </a>
        </div>
      </div>

      {/* Contact Form / Info */}
      <div className="contact-container">
        <h2 className="section-heading">
          Let's build something <span>useful.</span>
        </h2>
        
        <p className="contact-desc">
          Open to internships, apprenticeships, technical projects, hackathons and opportunities in Embedded Systems, Software Development and AI.
        </p>
        
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-btn github">
            <FaGithub size={24} />
            GitHub
          </a>
          
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-btn linkedin">
            <FaLinkedin size={24} />
            LinkedIn
          </a>
          
          <a href={`mailto:${profile.email}`} className="contact-btn email">
            <Mail size={24} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
