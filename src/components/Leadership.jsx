import React from 'react';
import { Users, Lightbulb, BookOpen } from 'lucide-react';
import './Leadership.css';
import byteClubLogo from '../assets/byte_club_logo.jpg';

const Leadership = () => {
  return (
    <section className="section leadership-section" id="leadership">
      <h2 className="section-heading">
        Leadership & <span>Campus Involvement.</span>
      </h2>
      <p className="section-subheading">
        Contributing to the ECE community and campus culture through technical events, workshops, and collaborative activities.
      </p>
      
      <div className="leadership-timeline">
        <div className="leadership-timeline-item">
          <div className="leadership-timeline-icon">
            <Users size={20} />
          </div>
          <div className="leadership-timeline-content">
            <div className="leadership-header-with-logo">
              <img src={byteClubLogo} alt="Byte Club Logo" className="byte-club-logo" />
              <div className="leadership-header-text">
                <h3 className="leadership-title">Byte Club — ECE Technical Club</h3>
                <h4 className="leadership-role">Coordinator</h4>
              </div>
            </div>
            <p className="leadership-desc">
              Actively involved in the ECE technical community, contributing to the planning and execution of technical activities and student-focused events.
            </p>
            <ul className="leadership-responsibilities">
              <li>Co-organized and conducted technical workshops with fellow coordinators.</li>
              <li>Coordinated the planning and execution of the ECE Ideathon.</li>
              <li>Guided and engaged students during technical activities and learning sessions.</li>
              <li>Coordinated with club members and participants during technical events.</li>
              <li>Supported technical community-building and innovation activities within the ECE branch.</li>
            </ul>
            <div className="leadership-skills">
              <strong>Skills:</strong> Technical Community • Leadership • Collaboration • Event Coordination
            </div>
          </div>
        </div>

        <div className="leadership-timeline-item">
          <div className="leadership-timeline-icon">
            <Lightbulb size={20} />
          </div>
          <div className="leadership-timeline-content">
            <h3 className="leadership-title">ECE Ideathon</h3>
            <p className="leadership-desc">
              Contributed to organizing an open-topic Ideathon for ECE students, providing a platform for participants to present innovative ideas and practical solutions.
            </p>
            <div className="leadership-skills">
              <strong>Skills:</strong> Event planning • Student coordination • Idea presentation • Innovation • Problem solving • Technical community engagement
            </div>
          </div>
        </div>

        <div className="leadership-timeline-item">
          <div className="leadership-timeline-icon">
            <BookOpen size={20} />
          </div>
          <div className="leadership-timeline-content">
            <h3 className="leadership-title">Technical Workshops & Learning Sessions</h3>
            <p className="leadership-desc">
              Contributed to technical learning activities and workshops designed to help ECE students gain practical exposure to emerging technologies and engineering concepts.
            </p>
            <div className="leadership-skills">
              <strong>Skills:</strong> Event organization • Technical communication • Team collaboration • Student engagement • Workshop coordination • Technical community building
            </div>
          </div>
        </div>

        <div className="leadership-timeline-item">
          <div className="leadership-timeline-icon">
            <span role="img" aria-label="Spectra Cultural Club" style={{ fontSize: '1.2rem' }}>🎭</span>
          </div>
          <div className="leadership-timeline-content spectra-content">
            <h3 className="leadership-title">Spectra — Cultural Club</h3>
            <h4 className="leadership-role">Cultural Event Coordinator</h4>
            <p className="leadership-desc">
              Actively involved in the college cultural community through creative activities, teamwork, and campus events. The experience has helped strengthen communication, collaboration, confidence, and creative expression.
            </p>
            <ul className="leadership-responsibilities">
              <li>Coordinated cultural events and activities within the college community.</li>
              <li>Worked with students and team members to plan and execute cultural events.</li>
              <li>Supported event coordination, communication, and on-ground execution.</li>
              <li>Collaborated with team members to ensure smooth event planning and execution.</li>
              <li>Developed teamwork, organizational, communication, and leadership skills through event responsibilities.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
