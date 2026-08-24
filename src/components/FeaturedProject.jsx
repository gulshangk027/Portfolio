import React from 'react';
import { ExternalLink, Activity, ShieldCheck, Share2, Search } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './FeaturedProject.css';
import { profile } from '../data/profile';

const FeaturedProject = () => {
  return (
    <section className="section featured-section" id="projects">
      <div className="featured-container">
        <div className="project-category">AI • FINTECH • CYBERSECURITY • HACKATHON</div>
        <h2 className="featured-title">MuleNet</h2>
        
        <div className="project-tags" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <span className="project-tag" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-secondary)', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid rgba(59, 130, 246, 0.2)' }}>Bank of India CyberShield Hackathon 2026</span>
          <span className="project-tag" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-primary)', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid rgba(16, 185, 129, 0.2)' }}>Grand Finale Shortlisted</span>
        </div>
        
        <p className="featured-desc">
          MuleNet is an AI-powered banking fraud and mule-account detection platform developed for the Bank of India CyberShield Hackathon 2026. The solution focuses on prevention, real-time detection, graph intelligence and victim complaint assistance.
        </p>
        
        <div className="featured-modules">
          <div className="module-card">
            <ShieldCheck className="module-icon" size={24} />
            <h4>RAKSHAK</h4>
            <p>Prevention</p>
          </div>
          <div className="module-card">
            <Activity className="module-icon" size={24} />
            <h4>DRISHTHI</h4>
            <p>Real-time Detection</p>
          </div>
          <div className="module-card">
            <Share2 className="module-icon" size={24} />
            <h4>Graph Intelligence</h4>
            <p>Relationship and transaction analysis</p>
          </div>
          <div className="module-card">
            <Search className="module-icon" size={24} />
            <h4>AWAAZ</h4>
            <p>Victim complaint assistance</p>
          </div>
        </div>
        
        <div className="featured-details">
          <div className="detail-section">
            <h3>Technical Approach</h3>
            <p>Voting Classifier using:</p>
            <ul>
              <li>Gradient Boosting</li>
              <li>Random Forest</li>
              <li>Logistic Regression</li>
            </ul>
            <p className="feature-eng">Feature engineering: <strong>21 behavioral features</strong></p>
          </div>
          
          <div className="detail-section">
            <h3>Evaluation Metrics</h3>
            <div className="metrics-grid">
              <div className="metric">
                <span className="metric-val">0.9879</span>
                <span className="metric-label">AUC-ROC</span>
              </div>
              <div className="metric">
                <span className="metric-val">0.95</span>
                <span className="metric-label">F1 Score</span>
              </div>
              <div className="metric">
                <span className="metric-val">93.4%</span>
                <span className="metric-label">Precision</span>
              </div>
              <div className="metric">
                <span className="metric-val">0.5%</span>
                <span className="metric-label">False Positive Rate</span>
              </div>
            </div>
          </div>
          
          <div className="detail-section">
            <h3>Dataset</h3>
            <div className="dataset-grid">
              <div className="data-item"><strong>9,082</strong> Accounts</div>
              <div className="data-item"><strong>3,924</strong> Features</div>
              <div className="data-item"><strong>81</strong> Confirmed mule accounts</div>
              <div className="data-item"><strong>0.89%</strong> Prevalence</div>
            </div>
          </div>
        </div>
        
        <p className="evaluation-note">
          * Evaluation results from the project's dataset/evaluation setup; these figures should not be interpreted as guaranteed production banking performance.
        </p>
        
        <div className="featured-actions">
          <a href="https://mul-net-e1h2.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <ExternalLink size={18} />
            Live Demo
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
