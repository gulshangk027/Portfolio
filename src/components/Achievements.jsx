import React from 'react';
import { Trophy } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const activities = [
    "Hackathons & Ideathons",
    "Technical Workshops",
    "Drone Technology Bootcamp",
    "Techathon Participation",
    "ECE Technical Activities",
    "Byte Club — ECE Branch (Technical/Community involvement)"
  ];

  return (
    <section className="section achievements-section">
      <h2 className="section-heading">
        Achievements & <span>Activities.</span>
      </h2>
      
      <div className="achievements-container">
        <div className="prominent-achievement">
          <div className="prominent-header">
            <h3>Bank of India CyberShield Hackathon 2026</h3>
            <span className="prominent-badge">Grand Finale Shortlisted</span>
          </div>
          <p className="prominent-location">IIT Hyderabad</p>
          <p className="prominent-desc">
            Shortlisted for the Grand Finale with MuleNet, an AI-powered banking fraud and mule-account detection platform addressing financial cybersecurity and mule-account detection.
          </p>
        </div>

        <div className="achievements-list">
          {activities.map((item, idx) => (
            <div key={idx} className="achievement-item">
              <Trophy size={18} className="achievement-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
