'use client';

import styles from './Skills.module.css';

const skills = [
  'Figma', 'FigJam', 'Adobe XD', 'Photoshop', 'Illustrator',
  'UX Research', 'User Flow', 'Design Systems', 'Prototyping',
  'Responsive Design', 'Interaction Design', 'Visual Design',
];

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Toolkit</span>
          <h2 className="section-title gradient-text">Skills &amp; Tools</h2>
          <p className="section-subtitle">
            The tools and methodologies I use to bring ideas to life.
          </p>
        </div>

        <div className={styles.chipGrid}>
          {skills.map((skill, i) => (
            <div
              key={skill}
              className={`${styles.chip} reveal`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className={styles.chipDot} />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
