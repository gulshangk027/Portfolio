import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <h2 className="section-heading">
        Work <span>Experience.</span>
      </h2>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <Briefcase size={20} />
          </div>
          <div className="timeline-content">
            <h3 className="company-name">Edunet Foundation × IBM SkillsBuild</h3>
            <h4 className="job-title">Emerging Technologies / AI Intern</h4>
            <ul className="job-responsibilities">
              <li>Engaged in comprehensive learning in Artificial Intelligence and Generative AI.</li>
              <li>Explored various AI tools, emerging technologies, and applications.</li>
              <li>Completed IBM SkillsBuild technical learning modules.</li>
              <li>Participated in practical technology and project-based learning.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <Briefcase size={20} />
          </div>
          <div className="timeline-content">
            <h3 className="company-name">Microsoft Power BI Internship</h3>
            <h4 className="job-title">Power BI / Data Analytics Intern</h4>
            <ul className="job-responsibilities">
              <li>Trained in Microsoft Power BI and Data Analytics.</li>
              <li>Developed data visualization and interactive dashboards.</li>
              <li>Focused on data interpretation and real-world datasets.</li>
              <li>Learned core Business Intelligence concepts.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <Briefcase size={20} />
          </div>
          <div className="timeline-content">
            <h3 className="company-name">TechGlaz Labs Pvt. Ltd.</h3>
            <h4 className="job-title">VLSI System Design using Verilog (Technical Intern)</h4>
            <ul className="job-responsibilities">
              <li>Gained practical experience in VLSI System Design.</li>
              <li>Implemented hardware designs using Verilog HDL.</li>
              <li>Studied Digital Logic and RTL (Register-Transfer Level) concepts.</li>
              <li>Conducted simulation and verification of digital circuits.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <Briefcase size={20} />
          </div>
          <div className="timeline-content">
            <h3 className="company-name">TechGlaz Pvt. Ltd.</h3>
            <h4 className="job-title">Software Development Intern / Embedded Systems Training</h4>
            <ul className="job-responsibilities">
              <li>Software development exposure and practical application</li>
              <li>Embedded systems training focusing on real-world implementations</li>
              <li>Arduino programming and microcontroller-based projects</li>
              <li>Sensor interfacing and hardware-software integration</li>
              <li>Practical electronics experimentation and prototyping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
