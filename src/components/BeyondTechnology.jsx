import React from 'react';
import './BeyondTechnology.css';

const BeyondTechnology = () => {
  const creativeInterests = [
    {
      emoji: "✍️",
      title: "Poetry & Shayari",
      description: "I enjoy expressing emotions, ideas and perspectives through poetry and Shayari."
    },
    {
      emoji: "📝",
      title: "Script Writing",
      description: "I enjoy developing ideas into structured scripts and stories with a focus on storytelling and communication."
    },
    {
      emoji: "🎬",
      title: "Content Creation",
      description: "I explore content creation as a way to communicate ideas, stories and useful information through digital platforms."
    },
    {
      emoji: "💡",
      title: "Creative Writing",
      description: "Creative writing helps me experiment with ideas, perspectives and different forms of expression."
    }
  ];

  return (
    <section className="section beyond-tech-section" id="beyond-technology">
      <h2 className="section-heading">
        Beyond <span>Technology.</span>
      </h2>
      
      <p className="beyond-tech-intro">
        Beyond technology, I enjoy poetry, script writing and content creation. This creative side of me helps strengthen my communication, storytelling and ability to approach problems from different perspectives.
      </p>

      <div className="beyond-tech-grid">
        {creativeInterests.map((item, idx) => (
          <div key={idx} className="creative-card">
            <span className="creative-emoji" role="img" aria-label={item.title}>{item.emoji}</span>
            <h3 className="creative-title">{item.title}</h3>
            <p className="creative-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeyondTechnology;
