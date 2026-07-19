'use client';

import styles from './Services.module.css';
import { PenTool, Search, Layout, Smartphone, Globe, Layers, Figma } from 'lucide-react';

const services = [
  { icon: PenTool, title: 'UI Design', desc: 'Beautiful, pixel-perfect interfaces that delight users and reinforce brand identity.' },
  { icon: Search, title: 'UX Research', desc: 'User interviews, surveys, and usability tests to uncover insights that drive design.' },
  { icon: Layout, title: 'Wireframing', desc: 'Low and high-fidelity wireframes that map user flows and validate concepts early.' },
  { icon: Layers, title: 'Prototyping', desc: 'Interactive prototypes that bring ideas to life for testing and stakeholder buy-in.' },
  { icon: Smartphone, title: 'Mobile App Design', desc: 'Native and cross-platform mobile experiences with platform-aware patterns.' },
  { icon: Globe, title: 'Web Design', desc: 'Responsive web experiences that look stunning across every screen size.' },
  { icon: Figma, title: 'Design Systems', desc: 'Scalable component libraries and style guides for consistent brand experiences.' },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title gradient-text">Services</h2>
          <p className="section-subtitle">
            End-to-end design expertise from concept to launch.
          </p>
        </div>

        <div className={`${styles.grid} stagger-children`}>
          {services.map((service, i) => (
            <div key={i} className={`${styles.card} glass-card reveal`}>
              <div className={styles.cardIcon}>
                <service.icon size={24} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
