'use client';

import styles from './About.module.css';
import { Heart, Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title gradient-text">Good Design is a Decision, Not a Decoration</h2>
          <p className="section-subtitle">
            I turn what users need and what the business wants into one clear experience, so people get it the first time.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p className={styles.bioText}>
              I&apos;m Ummu Salmah, a UI/UX designer. Every screen I make starts with a question: what is this person trying to do, and what&apos;s getting in their way?
            </p>
            <p className={styles.bioText}>
              I do the research first, because most design problems are really misunderstood people. Then I build the solution with care, down to the smallest detail, so the interface does its job and stays out of the way.
            </p>
            <p className={styles.bioText}>
              I&apos;ve worked across mobile apps, web platforms and design systems, from first interview to final handoff. If you&apos;re building something people need to understand in seconds, let&apos;s talk.
            </p>
          </div>

          <div className={`${styles.values} stagger-children`}>
            {[
              { icon: Heart, title: 'User-Centered', desc: 'Every design decision starts and ends with the user in mind.' },
              { icon: Target, title: 'Goal-Oriented', desc: 'Aligning beautiful design with measurable business outcomes.' },
              { icon: Eye, title: 'Detail-Obsessed', desc: 'Perfecting every pixel, spacing, and micro-interaction.' },
            ].map((item, i) => (
              <div key={i} className={`${styles.valueCard} glass-card reveal`}>
                <div className={styles.valueIcon}>
                  <item.icon size={22} />
                </div>
                <h3 className={styles.valueTitle}>{item.title}</h3>
                <p className={styles.valueDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
