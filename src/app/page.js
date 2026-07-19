'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Skills from '@/sections/Skills';
import Process from '@/sections/Process';
import Projects from '@/sections/Projects';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Process />
      <Projects />
      <Testimonials />
      <Contact />
      <WhatsAppFAB />
      <Footer />
    </>
  );
}
