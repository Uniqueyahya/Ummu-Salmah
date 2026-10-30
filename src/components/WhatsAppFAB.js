'use client';

import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppFAB.module.css';

export default function WhatsAppFAB() {
    return (
        <a
            href="https://wa.me/2348109115252"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fab}
            aria-label="Chat on WhatsApp"
        >
            <span className={styles.pulse} />
            <MessageCircle size={24} />
        </a>
    );
}
