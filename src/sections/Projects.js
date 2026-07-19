'use client';

import { useState } from 'react';
import styles from './Projects.module.css';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Apex FinTech Mobile App',
    category: 'Mobile Design & Strategy',
    desc: 'A complete redesign of a banking app focusing on simplifying peer-to-peer payments and portfolio tracking. Created a dark-first design language that improved engagement by 40%.',
    tags: ['Figma', 'UX Research', 'Interactive Prototype', 'Design System'],
    link: '#contact',
  },
  {
    title: 'Nova E-Commerce Experience',
    category: 'Web Design & Design System',
    desc: 'An end-to-end UX overhaul of a global fashion retailer. Built a scalable, accessible design system containing over 200 components, resulting in a 25% increase in checkout conversions.',
    tags: ['UI/UX Design', 'Wireframing', 'Design System', 'Accessibility'],
    link: '#contact',
  },
  {
    title: 'Pulse Health SaaS Dashboard',
    category: 'B2B Web Application',
    desc: 'A desktop platform for healthcare providers to track patient vitals and manage appointments. Simplified complex medical data sets into clean, digestible data visualizations.',
    tags: ['Dashboard Design', 'Data Visualization', 'Figma', 'Prototyping'],
    link: '#contact',
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} glass-card reveal`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image / Thumbnail placeholder */}
              <div className={styles.thumbnailWrap}>
                <div className={styles.thumbnailGlow} />
                <div className={styles.thumbnail}>
                  <div className={styles.placeholderIcon}>
                    <span>🎨 Case Study</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <span className={styles.category}>{project.category}</span>
                <div className={styles.titleRow}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={`${styles.iconWrap} ${hoveredIndex === index ? styles.iconHovered : ''}`}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
