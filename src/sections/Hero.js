'use client';

import styles from './Hero.module.css';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Animated background blobs */}
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />
      <div className={styles.bgBlob3} />

      <div className={`container ${styles.heroInner}`}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <Sparkles size={14} />
            <span>Available for Freelance &amp; Full-Time Opportunities</span>
          </div>

          {/* Name */}
          <h1 className={styles.name}>
            <span className={styles.nameGradient}>Ummu Salmah</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            UI/UX Designer crafting intuitive, accessible, and visually engaging digital experiences that solve real user problems.
          </p>

          {/* Description */}
          <p className={styles.description}>
            I transform ideas into meaningful digital products through user-centered design. From research and wireframes to polished interfaces and interactive prototypes, I create experiences that are simple, functional, and memorable.
          </p>

          {/* CTAs */}
          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let&apos;s Collaborate
            </a>
          </div>
        </div>

        {/* Portrait placeholder with glow */}
        <div className={styles.portraitWrap}>
          <div className={styles.portraitGlow} />
          <div className={styles.portrait}>
            <div className={styles.portraitPlaceholder}>
              <span className={styles.portraitInitial}>US</span>
            </div>
          </div>
          <div className={styles.floatingBadge1}>
            <span>✨ Figma Expert</span>
          </div>
          <div className={styles.floatingBadge2}>
            <span>🎨 Design Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}
