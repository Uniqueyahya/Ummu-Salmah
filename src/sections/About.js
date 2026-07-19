'use client';

import styles from './About.module.css';
import { Heart, Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title gradient-text">Passionate About Design</h2>
          <p className="section-subtitle">
            Creating digital experiences that balance user needs with business goals.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p className={styles.bioText}>
              I&apos;m Ummu Salmah, a UI/UX Designer passionate about creating digital experiences that truly matter. I believe great design is invisible — it simply works. My approach combines empathy-driven research with pixel-perfect execution, ensuring every interaction feels intuitive and every visual tells a story.
            </p>
            <p className={styles.bioText}>
              With expertise spanning from initial user research to final handoff, I partner with teams and clients to build products that users love and businesses rely on. Whether it&apos;s a mobile app, web platform, or design system, I bring the same level of care and craftsmanship to every project.
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
