import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["C", "C++", "Java", "JavaScript"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Web Development"]
    },
    {
      title: "Embedded Systems",
      skills: ["Arduino", "Microcontrollers", "Embedded Systems", "Sensors", "PWM", "Servo Motors"]
    },
    {
      title: "AI & Emerging Technology",
      skills: ["Generative AI", "AI Agents", "Machine Learning Concepts", "Data Analytics"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "MATLAB"]
    },
    {
      title: "Core ECE",
      skills: ["Digital Electronics", "Communication Systems", "Signals & Systems", "Microcontrollers"]
    }
  ];

  return (
    <section className="section skills-section" id="skills">
      <h2 className="section-heading">
        Tools I use to turn <span>ideas into reality.</span>
      </h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
