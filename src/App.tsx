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

