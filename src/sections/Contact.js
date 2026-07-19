'use client';

import styles from './Contact.module.css';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      {/* Background Glows */}
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className="container">
        <div className={`${styles.card} glass-card reveal-scale`}>
          <div className={styles.content}>
            <span className={styles.subtitle}>Let&apos;s Work Together</span>
            <h2 className={styles.title}>
              Let&apos;s Create Something <span className={styles.titleGradient}>Amazing</span> Group
            </h2>
            <p className={styles.desc}>
              Have an idea, project, or opportunity you&apos;d like to discuss? Feel free to reach out. I&apos;m always open to talking about UI/UX design, design systems, and product strategy.
            </p>

            <div className={styles.actions}>
              <a href="mailto:Salmahummu029@gmail.com" className="btn btn-primary">
                <Mail size={18} /> Send an Email
              </a>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Calendar size={18} /> Book a Meeting <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
