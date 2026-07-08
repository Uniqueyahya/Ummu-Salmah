'use client';

import {
    Atom,
    Sparkles,
    Server,
    Zap,
    Leaf,
    Flame,
    Link2,
    GitBranch,
    Figma,
    Terminal,
    Code
} from 'lucide-react';
import styles from './TechStack.module.css';

const techs = [
    { name: 'React', icon: Atom, color: '#61DAFB' },
    { name: 'React Native', icon: Atom, color: '#38BDF8' },
    { name: 'Expo', icon: Sparkles, color: '#818CF8' },
    { name: 'Node.js', icon: Server, color: '#22C55E' },
    { name: 'Express', icon: Zap, color: '#EAB308' },
    { name: 'MongoDB', icon: Leaf, color: '#10B981' },
    { name: 'Firebase', icon: Flame, color: '#F97316' },
    { name: 'REST APIs', icon: Link2, color: '#3B82F6' },
    { name: 'Git', icon: GitBranch, color: '#EF4444' },
    { name: 'Figma', icon: Figma, color: '#EC4899' },
    { name: 'Next.js', icon: Terminal, color: '#94A3B8' },
    { name: 'JavaScript', icon: Code, color: '#FACC15' },
];

export default function TechStack() {
    return (
        <section className="section section-alt">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Technologies</span>
                    <h2 className="section-title">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="section-subtitle">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </div>

                <div className={`${styles.grid} stagger-children`}>
                    {techs.map((tech, i) => {
                        const Icon = tech.icon;
                        return (
                            <div key={i} className={`${styles.card} reveal`}>
                                <span className={styles.icon} style={{ color: tech.color }}>
                                    <Icon size={26} strokeWidth={2} />
                                </span>
                                <span className={styles.name}>{tech.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
