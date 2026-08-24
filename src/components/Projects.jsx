import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';
import { profile } from '../data/profile';

const Projects = () => {
  const [filter, setFilter] = useState('ALL');

  const projectsList = [
    {
      id: "01",
      title: "EngiHub",
      category: "WEB • AI • SOFTWARE",
      desc: "Student-focused engineering platform designed to bring useful academic, technical and career resources together in one place. Integrates IBM watsonx.ai for AI-powered interview question generation.",
      tech: ["Python", "Flask", "IBM watsonx.ai", "Web Development"],
      github: "https://github.com/gulshangk027/EngiHub",
      featured: true
    },
    {
      id: "02",
      title: "NutriSage AI",
      category: "AI • SOFTWARE",
      desc: "AI-powered nutrition assistant designed to provide personalized nutrition guidance and interact with users through an intelligent AI-agent workflow.",
      tech: ["Generative AI", "AI Agent", "Conversational AI"],
      github: "https://github.com/gulshangk027/Nutrition-Agent",
      featured: true
    },
    {
      id: "03",
      title: "Fact-Rakshak",
      category: "AI • WEB",
      desc: "AI-powered fact-checking application designed to help users evaluate and understand the credibility of information.",
      tech: ["AI", "Web Development"],
      github: "https://github.com/gulshangk027/fact-rakshak",
      featured: true
    },
    {
      id: "04",
      title: "Smart Traffic Signal System",
      category: "EMBEDDED • HARDWARE",
      desc: "Arduino-based traffic signal prototype demonstrating LED control, timing logic and microcontroller programming.",
      tech: ["Arduino", "C/C++", "LEDs"],
      github: profile.github
    },
    {
      id: "05",
      title: "Alcohol Detection System",
      category: "EMBEDDED • HARDWARE",
      desc: "Arduino-based alcohol detection prototype using an MQ-3 sensor to detect alcohol vapour and trigger an indication.",
      tech: ["Arduino", "MQ-3", "Sensors"]
    },
    {
      id: "06",
      title: "Ultrasonic Servo Gate",
      category: "EMBEDDED • HARDWARE",
      desc: "Distance-based automated gate prototype combining an ultrasonic sensor and servo motor.",
      tech: ["Arduino", "Ultrasonic Sensor", "Servo Motor"]
    },
    {
      id: "07",
      title: "Fire Alarm System",
      category: "EMBEDDED • HARDWARE",
      desc: "Sensor-based Arduino prototype designed to detect fire-related conditions and trigger an alert.",
      tech: ["Arduino", "Sensor", "Buzzer"]
    },
    {
      id: "08",
      title: "LDR Sensor Project",
      category: "EMBEDDED • HARDWARE",
      desc: "Arduino project demonstrating light-dependent sensing and output control using an LDR sensor.",
      tech: ["Arduino", "LDR"]
    },
    {
      id: "09",
      title: "PIR Motion Detection",
      category: "EMBEDDED • HARDWARE",
      desc: "Motion detection prototype using a PIR sensor and Arduino.",
      tech: ["Arduino", "PIR Sensor"]
    },
    {
      id: "10",
      title: "Temperature Sensor",
      category: "EMBEDDED • HARDWARE",
      desc: "Arduino-based temperature monitoring experiment using a temperature sensor.",
      tech: ["Arduino", "Temperature Sensor"]
    },
    {
      id: "11",
      title: "RGB LED PWM",
      category: "EMBEDDED • HARDWARE",
      desc: "RGB LED project demonstrating PWM-based control of LED intensity and color.",
      tech: ["Arduino", "PWM", "RGB LED"]
    },
    {
      id: "12",
      title: "Musical Keyboard",
      category: "EMBEDDED • HARDWARE",
      desc: "Arduino Uno based musical keyboard prototype using input switches and sound output.",
      tech: ["Arduino Uno", "Switches", "Sound Module"]
    },
    {
      id: "13",
      title: "Amazon Clone",
      category: "WEB • SOFTWARE",
      desc: "Frontend practice project inspired by an e-commerce interface, focusing on responsive layout, UI structure and web fundamentals. (Practice/Clone Project)",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: "14",
      title: "Netflix Clone",
      category: "WEB • SOFTWARE",
      desc: "Frontend practice project inspired by a streaming interface, focusing on responsive UI, layout and web development fundamentals. (Practice/Clone Project)",
      tech: ["HTML", "CSS", "JavaScript"]
    }
  ];

  const filterOptions = ["ALL", "AI", "EMBEDDED", "SOFTWARE", "WEB", "HACKATHON"];

  const filteredProjects = filter === 'ALL' 
    ? projectsList 
    : projectsList.filter(p => p.category.includes(filter));

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section className="section projects-section" id="other-projects">
      <h2 className="section-heading">
        Projects & <span>Portfolio.</span>
      </h2>
      
      <div className="project-filters">
        {filterOptions.map(f => (
          <button 
            key={f} 
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      
      {featuredProjects.length > 0 && (
        <>
          <h3 className="subsection-heading">Featured Projects</h3>
          <div className="projects-grid featured-grid">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="project-card featured-card">
                <div className="project-header">
                  <span className="project-number">{project.id}</span>
                  <span className="project-category-tag">{project.category}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {regularProjects.length > 0 && (
        <>
          <h3 className="subsection-heading" style={{marginTop: featuredProjects.length > 0 ? '3rem' : '0'}}>Other Projects</h3>
          <div className="projects-grid">
            {regularProjects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div className="project-header">
                  <span className="project-number">{project.id}</span>
                  <span className="project-category-tag">{project.category}</span>
                </div>
                
                {project.context && (
                  <div className="project-context-badge">{project.context}</div>
                )}
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
