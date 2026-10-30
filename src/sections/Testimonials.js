'use client';

import styles from './Testimonials.module.css';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Ummu has an incredible eye for detail. She took our messy product requirements and turned them into a clean, intuitive SaaS dashboard that our clients absolutely love. Highly recommended!',
    author: 'Mr Yinka',
    role: 'CEO, Y3data',
  },
  {
    quote: 'Working with Ummu Salmah was a game changer for our mobile app. Her research-focused UX design and beautifully curated Figma files made the developer handoff completely seamless.',
    author: 'Unique Yahya',
    role: 'Full Stack Developer',
  },
  {
    quote: 'Ummu Salmah delivered a beautiful, clean design system that saved our design team hundreds of hours. Her communication and professionalism are outstanding.',
    author: 'Chinedu Okonkwo',
    role: 'Lead UX Manager at Nova Retail',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Wall of Love</span>
          <h2 className="section-title gradient-text">Client Testimonials</h2>
          <p className="section-subtitle">
            What clients and collaborators say about working with me.
          </p>
        </div>

        <div className={`${styles.grid} stagger-children`}>
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.card} glass-card reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.quoteIcon}>
                <Quote size={28} />
              </div>
              <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.meta}>
                <h4 className={styles.author}>{t.author}</h4>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
