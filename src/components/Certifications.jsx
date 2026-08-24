import React from 'react';
import { Award, FileBadge } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    {
      title: "Robotics & Controls Job Simulation",
      issuer: "Johnson & Johnson — Forage"
    },
    {
      title: "GenAI Data Analytics Job Simulation",
      issuer: "Tata iQ — Forage"
    },
    {
      title: "Cyber Job Simulation",
      issuer: "Deloitte Australia — Forage"
    },
    {
      title: "3D Printing & Additive Manufacturing Technology",
      issuer: "C-DAC",
      detail: "160-hour training"
    },
    {
      title: "Bootcamp on Drone and Allied Technology",
      issuer: "C-DAC Patna",
      detail: "Grade: A"
    },
    {
      title: "Emerging Technologies / AI learning",
      issuer: "IBM SkillsBuild"
    },
    {
      title: "Enhancing Soft Skills and Personality",
      issuer: "NPTEL"
    },
    {
      title: "Participation / project experience",
      issuer: "EY Techathon 6.0"
    },
    {
      title: "Participation",
      issuer: "Tata Crucible Campus Quiz 2025"
    }
  ];

  return (
    <section className="section certifications-section" id="certifications">
      <h2 className="section-heading">
        Professional <span>Certifications.</span>
      </h2>
      
      <div className="certs-grid">
        {certs.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <div className="cert-icon">
              {idx < 3 ? <Award size={24} /> : <FileBadge size={24} />}
            </div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.detail && <span className="cert-detail">{cert.detail}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
