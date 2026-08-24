import React from 'react';
import { GraduationCap, Cpu, Code, BrainCircuit } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <GraduationCap size={28} />,
      title: "ECE'27",
      desc: "B.Tech Undergraduate"
    },
    {
      icon: <Cpu size={28} />,
      title: "Embedded",
      desc: "Arduino & Sensors"
    },
    {
      icon: <Code size={28} />,
      title: "Software",
      desc: "Web & Programming"
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "AI",
      desc: "Generative AI & AI Agents"
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="about-container">
        <h2 className="section-heading">
          A curious ECE student who likes to <span>build things.</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm pursuing a B.Tech in Electronics & Communication Engineering at Bhagalpur College of Engineering. My interests span both hardware and software — from Arduino, sensors and embedded systems to web development, AI and practical technology projects.
            </p>
            <p>
              I enjoy participating in hackathons, technical events and hands-on projects while continuously improving my programming, problem-solving and engineering fundamentals.
            </p>
          </div>

          <div className="about-cards">
            {cards.map((card, idx) => (
              <div key={idx} className="about-card">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
