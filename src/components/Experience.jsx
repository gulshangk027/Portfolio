import React from 'react';
import { Briefcase, BookOpen, Award } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <h2 className="section-heading">
        Experience & <span>Technical Training.</span>
      </h2>
      <p className="section-subheading">
        Internships, technical training and hands-on learning experiences.
      </p>
      
      <div className="timeline">
        <h3 className="timeline-category">Professional Experience</h3>
        
        <div className="timeline-item">
          <div className="timeline-icon">
            <Briefcase size={20} />
          </div>
          <div className="timeline-content">
            <h3 className="company-name">Edunet Foundation × IBM SkillsBuild</h3>
            <h4 className="job-title">Emerging Technologies / AI Intern</h4>
            <ul className="job-responsibilities">
              <li>Engaged in structured learning across Artificial Intelligence, Generative AI, and emerging technologies.</li>
              <li>Explored AI tools, applications, and practical use cases across different domains.</li>
              <li>Completed technical learning modules and learning activities through IBM SkillsBuild.</li>
              <li>Developed practical understanding of Generative AI concepts and AI-powered solutions.</li>
              <li>Participated in project-oriented learning and explored the application of emerging technologies to real-world problems.</li>
            </ul>
            <div className="tech-stack-inline">
              <strong>Skills:</strong> AI • Generative AI • IBM SkillsBuild
            </div>
            <a href="/certificates/edunet_ internship_ certificate.pdf" target="_blank" rel="noopener noreferrer" className="exp-cert-link">📜 View Certificate</a>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <Briefcase size={20} />
          </div>
          <div className="timeline-content">
            <h3 className="company-name">Microsoft Power BI Internship</h3>
            <h4 className="job-title">Data Analytics / Power BI Intern</h4>
            <ul className="job-responsibilities">
              <li>Learned the fundamentals of Microsoft Power BI and business intelligence.</li>
              <li>Worked with data preparation, analysis, visualization, and dashboard concepts.</li>
              <li>Explored interactive charts, reports, dashboards, and data-driven insights.</li>
              <li>Developed understanding of transforming raw data into meaningful visual information.</li>
              <li>Gained practical exposure to data analytics and visualization workflows.</li>
            </ul>
            <div className="tech-stack-inline">
              <strong>Skills:</strong> Power BI • Data Analytics • Visualization • Dashboards
            </div>
            <a href="/certificates/certificate internship power bi.pdf" target="_blank" rel="noopener noreferrer" className="exp-cert-link">📜 View Certificate</a>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <Briefcase size={20} />
          </div>
          <div className="timeline-content">
            <h3 className="company-name">TechGlaz Pvt. Ltd.</h3>
            <h4 className="job-title">Software Development Intern & Embedded Systems Training</h4>
            <ul className="job-responsibilities">
              <li>Gained practical exposure to software development and embedded systems.</li>
              <li>Worked with Arduino Uno and microcontroller-based project development.</li>
              <li>Developed hands-on projects involving sensors, LEDs, actuators, and basic automation.</li>
              <li>Practiced hardware-software integration through sensor interfacing and embedded programming.</li>
              <li>Built projects including LED Blink, Traffic Signal System, RGB LED PWM, Alcohol Detection, Fire Alarm, Temperature Sensor, Water Sensor, Ultrasonic Sensor, PIR Sensor, Servo Gate, and Arduino Musical Keyboard.</li>
            </ul>
            <div className="tech-stack-inline">
              <strong>Technologies:</strong> Arduino • Embedded Systems • C/C++ • Sensors • Microcontrollers • Hardware-Software Integration
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <Briefcase size={20} />
          </div>
          <div className="timeline-content">
            <h3 className="company-name">TechGlaz Labs Pvt. Ltd.</h3>
            <h4 className="job-title">VLSI System Design using Verilog</h4>
            <ul className="job-responsibilities">
              <li>Completed technical training in VLSI System Design using Verilog HDL.</li>
              <li>Strengthened understanding of digital logic and hardware design fundamentals.</li>
              <li>Practiced Verilog-based hardware description and RTL design concepts.</li>
              <li>Explored the fundamentals of designing and representing digital hardware systems using HDL.</li>
              <li>Developed foundational knowledge relevant to VLSI and digital system design.</li>
            </ul>
            <div className="tech-stack-inline">
              <strong>Technologies:</strong> Verilog HDL • VLSI • Digital Logic • RTL • Hardware Design
            </div>
            <a href="/certificates/vlsi.pdf" target="_blank" rel="noopener noreferrer" className="exp-cert-link">📜 View Certificate</a>
          </div>
        </div>

        <h3 className="timeline-category mt-4">Technical Training & Workshops</h3>

        <div className="timeline-item">
          <div className="timeline-icon">
            <BookOpen size={20} />
          </div>
          <div className="timeline-content">
            <h3 className="company-name">C-DAC</h3>
            <h4 className="job-title">3D Printing & Additive Manufacturing Technology</h4>
            <p className="job-subtitle"><strong>160 Hours Technical Training</strong></p>
            <ul className="job-responsibilities">
              <li>Completed 160 hours of technical training in 3D Printing and Additive Manufacturing Technology.</li>
              <li>Developed an understanding of additive manufacturing concepts and 3D printing workflows.</li>
              <li>Explored the fundamentals of 3D modeling, printing processes, and additive manufacturing technologies.</li>
              <li>Gained practical exposure to the role of additive manufacturing in engineering and product development.</li>
              <li>Strengthened hands-on understanding of emerging manufacturing technologies.</li>
            </ul>
            <div className="tech-stack-inline">
              <strong>Training Area:</strong> 3D Printing • Additive Manufacturing • 3D Modeling • Manufacturing Technology
            </div>
            <a href="/certificates/Cdec certificate .pdf" target="_blank" rel="noopener noreferrer" className="exp-cert-link">📜 View Certificate</a>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <BookOpen size={20} />
          </div>
          <div className="timeline-content">
            <h3 className="company-name">C-DAC Patna</h3>
            <h4 className="job-title">Bootcamp on Drone & Allied Technology</h4>
            <p className="job-subtitle"><strong>SwaYaan Project — MeitY | 6-Day Offline Bootcamp</strong></p>
            <ul className="job-responsibilities">
              <li>Completed a six-day technical bootcamp focused on Drone and Allied Technology.</li>
              <li>Learned fundamentals of drone technology, including basic aerodynamics and flight principles.</li>
              <li>Explored drone sensors, components, and their role in navigation and control.</li>
              <li>Gained introductory exposure to drone systems, applications, and allied technologies.</li>
              <li>Participated in hands-on and technical learning activities related to drone technology.</li>
            </ul>
            <div className="tech-stack-inline">
              <strong>Training Areas:</strong> Drone Technology • Aerodynamics • Sensors • UAV Fundamentals • Allied Technologies
            </div>
            <a href="/certificates/drone.pdf" target="_blank" rel="noopener noreferrer" className="exp-cert-link">📜 View Certificate</a>
          </div>
        </div>
      </div>

      <div className="cert-credly-container exp-credly-container">
        <a 
          href="https://www.credly.com/users/gulshan-kumar.759d0244" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-credly"
        >
          <Award size={20} className="credly-icon" />
          View All Credly Certificates
          <span className="credly-arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default Experience;
