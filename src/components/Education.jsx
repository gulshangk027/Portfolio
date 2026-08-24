import React from 'react';
import { BookOpen } from 'lucide-react';
import './Education.css';
import { profile } from '../data/profile';

const Education = () => {
  return (
    <section className="section education-section" id="education">
      <h2 className="section-heading">
        Academic <span>Background.</span>
      </h2>
      
      <div className="education-container">
        <div className="edu-card">
          <div className="edu-icon">
            <BookOpen size={24} />
          </div>
          
          <div className="edu-content">
            <div className="edu-header">
              <h3 className="college-name">{profile.college}</h3>
              <span className="edu-duration">2023–2027</span>
            </div>
            
            <h4 className="degree-name">{profile.degree}</h4>
            
            <div className="edu-details">
              <span className="edu-badge">{profile.batch}</span>
              <span className="edu-location">{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
