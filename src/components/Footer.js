'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#home" className={styles.logo}>
            Ummu<span>.</span>
          </a>
          <p className={styles.copy}>
            &copy; {currentYear} Ummu Salmah. All rights reserved.
          </p>
        </div>

        <div className={styles.credits}>
          <p className={styles.creditLine}>
            Designed by <span className={styles.author}>Ummu Salmah</span>
          </p>
          <span className={styles.separator}>•</span>
          <p className={styles.creditLine}>
            Developed by{' '}
            <a
              href="https://github.com/uniqueyahya"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.developer}
            >
              Unique Yahya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
