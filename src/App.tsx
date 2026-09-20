import React, { useState, useEffect } from 'react';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { EntranceAnimation } from './components/EntranceAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { LetterOfRecommendation } from './components/LetterOfRecommendation';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [isHeroReady, setIsHeroReady] = useState<boolean>(false);

  const handleExitStart = () => {
    setIsHeroReady(true);
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return true; // Dark-first default
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Smooth scroll to sections without leaving hash in browser URL
  useEffect(() => {
    const cleanHash = () => {
      if (window.location.hash) {
        const targetId = window.location.hash.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            const navHeight = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 150);
        }
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };

    cleanHash();
    window.addEventListener('hashchange', cleanHash);

    // Intercept clicks on any hash anchor link to prevent URL hash change
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;

      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.replaceState(null, '', window.location.pathname + window.location.search);
      } else if (href.startsWith('#') && href.length > 1) {
        const id = href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          const navHeight = 70;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, true);
    return () => {
      window.removeEventListener('hashchange', cleanHash);
      document.removeEventListener('click', handleAnchorClick, true);
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Task 1: Premium Entrance Animation (Full-screen overlay on every load/refresh) */}
      {showIntro && (
        <EntranceAnimation
          onExitStart={handleExitStart}
          onComplete={handleIntroComplete}
        />
      )}


      {/* Top Floating Glassmorphic Navigation */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Semantic Main Landmarks */}
      <main id="main-content">
        <Hero isReady={isHeroReady} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <LetterOfRecommendation />
        <Education />
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
}

