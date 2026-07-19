'use client';

import styles from './Process.module.css';
import { Compass, BookOpen, Lightbulb, PenTool, Monitor, Play, TestTube, Rocket } from 'lucide-react';

const steps = [
  { icon: Compass, title: 'Discover', desc: 'Understanding the problem space and project goals.' },
  { icon: BookOpen, title: 'Research', desc: 'User interviews, competitive analysis, and data gathering.' },
  { icon: Lightbulb, title: 'Ideate', desc: 'Brainstorming solutions and exploring concepts.' },
  { icon: PenTool, title: 'Wireframe', desc: 'Mapping user flows and structuring layouts.' },
  { icon: Monitor, title: 'UI Design', desc: 'Creating polished, pixel-perfect visual designs.' },
  { icon: Play, title: 'Prototype', desc: 'Building interactive, testable prototypes.' },
  { icon: TestTube, title: 'Testing', desc: 'Validating designs with real users and iterating.' },
  { icon: Rocket, title: 'Launch', desc: 'Handoff, implementation support, and optimization.' },
];

export default function Process() {
  return (
    <section id="process" className={`section ${styles.process}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">How I Work</span>
          <h2 className="section-title gradient-text">Design Process</h2>
          <p className="section-subtitle">
            A structured approach from discovery to delivery.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div key={i} className={`${styles.step} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={styles.stepNumber}>
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className={styles.stepLine} />
              <div className={styles.stepIcon}>
                <step.icon size={22} />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
