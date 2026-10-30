'use client';

import styles from './Projects.module.css';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Selected Works</span>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">
            A curated selection of digital products that combine form and function.
          </p>
        </div>

        {/* Portfolio CTA Card */}
        <div className={`${styles.ctaCard} glass-card reveal`}>
          <div className={styles.ctaGlow} />
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <Sparkles size={28} />
            </div>
            <h3 className={styles.ctaTitle}>Explore My Portfolio</h3>
            <p className={styles.ctaDesc}>
              Discover my complete body of work — from brand identities and mobile experiences 
              to full-scale design systems. See the process, the craft, and the results.
            </p>
            <div className={styles.ctaActions}>
              <a
                href="https://uniqueyahya-porfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonPrimary}
              >
                <span>View Portfolio</span>
                <ExternalLink size={16} />
              </a>
              <a href="#contact" className={styles.ctaButtonSecondary}>
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
