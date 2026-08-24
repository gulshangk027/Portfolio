import React from 'react';
import { Eye, Download } from 'lucide-react';
import { profile } from '../data/profile';
import './Resume.css';

const Resume = () => {
  return (
    <section className="section resume-section" id="resume">
      <h2 className="section-heading">
        Professional <span>Resume.</span>
      </h2>
      <p className="section-subheading">
        View my complete resume covering my education, internships, projects, technical skills, certifications and achievements.
      </p>

      <div className="resume-container">
        <div className="resume-card-simple">
          <div className="resume-header">
            <h3>{profile.name.toUpperCase()}</h3>
            <p className="resume-subtitle">ECE'27 • Embedded • AI</p>
          </div>

          <div className="resume-actions-simple">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-resume-view">
              <Eye size={20} />
              View Resume
            </a>
            <a href={profile.resume} download="Gulshan_resume.pdf" className="btn-resume-download">
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
