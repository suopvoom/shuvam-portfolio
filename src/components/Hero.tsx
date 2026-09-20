import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { profileData } from '../data/profile';
import { ArrowRight, FileDown, MapPin, GraduationCap, Github, Linkedin, Phone, Mail, Sparkles, BookOpen } from 'lucide-react';

export interface HeroProps {
  isReady?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isReady = true }) => {
  const prefersReducedMotion = useReducedMotion();

  // Coordinated item variants with staggered delays for the exact sequence:
  // 1. Availability badge (0s)
  // 2. Main heading (0.08s)
  // 3. Subtitle (0.16s)
  // 4. Description (0.24s)
  // 5. Contact information (0.32s)
  // 6. Action buttons (0.40s)
  // 7. Portrait image & Exploring card (0.48s / 0.56s)

  const getItemVariant = (delayIndex: number): Variants => ({
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: delayIndex * 0.08,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  });

  const photoVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        delay: 0.48, // 7th in sequence
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.56,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden">
      {/* Restrained ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols): Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* 1. Availability badge */}
            <motion.div
              variants={getItemVariant(0)}
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              className="flex flex-wrap items-center gap-2.5 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/10 text-accent-700 dark:text-accent-400 border border-accent-500/20 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse shrink-0" />
                <span>Aspiring Developer &bull; Building Ideas into Impact</span>
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-accent-500" />
                IEM Kolkata (BCA)
              </span>
            </motion.div>

            {/* 2. Main Headline */}
            <motion.h1
              variants={getItemVariant(1)}
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-amber-500 dark:from-accent-400 dark:to-amber-300">{profileData.name}</span>.
            </motion.h1>

            {/* 3. Subtitle */}
            <motion.h2
              variants={getItemVariant(2)}
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300 tracking-tight"
            >
              BCA Student &amp; Aspiring Software Developer.
            </motion.h2>

            {/* 4. Description */}
            <motion.p
              variants={getItemVariant(3)}
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl"
            >
              {profileData.subtitle}
            </motion.p>

            {/* 5. Contact Information */}
            <motion.div
              variants={getItemVariant(4)}
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono"
            >
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent-500" />
                {profileData.location}
              </span>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <a
                href={`tel:${profileData.phoneRaw}`}
                className="hover:text-accent-600 dark:hover:text-accent-400 transition-colors inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-accent-500" />
                {profileData.phone}
              </a>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <a
                href={`mailto:${profileData.email}`}
                className="hover:text-accent-600 dark:hover:text-accent-400 transition-colors inline-flex items-center gap-1"
              >
                <Mail className="w-3 h-3 text-accent-500" />
                {profileData.email}
              </a>
            </motion.div>

            {/* 6. Action Buttons & Social Links */}
            <motion.div
              variants={getItemVariant(5)}
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Explore My Work
              </Button>

              <Button
                href={profileData.resumePath}
                variant="outline"
                size="lg"
                external
                icon={<FileDown className="w-4 h-4 text-accent-500" />}
                iconPosition="left"
                download="shuvam-chowdhury-resume.pdf"
                aria-label="Download Shuvam Chowdhury Resume PDF"
              >
                Download Resume
              </Button>

              {/* Social Quick Links */}
              <div className="flex items-center gap-2 ml-0 sm:ml-2">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-surface-dark-elevated transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-surface-dark-elevated transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* 7. Right Column (5 cols): Cohesive Stack of Profile Photo + "Currently Exploring" */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6 w-full max-w-sm mx-auto">
            {/* Circular Profile Frame with fade + subtle scale-in */}
            <motion.div
              variants={photoVariants}
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              className="relative group flex justify-center"
            >
              {/* Thin animated accent glow ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-accent-500/30 via-transparent to-accent-500/20 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-2 bg-gradient-to-b from-surface-light-border to-transparent dark:from-surface-dark-border dark:to-surface-dark-card border border-accent-500/30 shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/assets/profile-photo.jpg"
                  alt={profileData.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: '50% 20%' }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />

                {/* Fallback avatar if photo fails to load */}
                <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-surface-dark-card to-surface-dark-muted flex-col items-center justify-center text-center p-6 border border-accent-500/20">
                  <div className="w-16 h-16 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center mb-2">
                    <span className="font-display font-bold text-2xl text-accent-400">SC</span>
                  </div>
                  <span className="font-display font-bold text-sm text-white">{profileData.name}</span>
                </div>

                {/* Subtle bottom badge overlay */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full glass-surface text-[10px] font-mono text-slate-800 dark:text-slate-200 border border-accent-500/30 shadow-sm flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-accent-500" />
                  <span>IEM Kolkata &bull; BCA</span>
                </div>
              </div>
            </motion.div>

            {/* "Currently Exploring" Card Stacked Directly Below Photo */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              className="w-full"
            >
              <Card
                hoverable
                padding="sm"
                className="w-full border border-surface-light-border dark:border-surface-dark-border bg-white/80 dark:bg-surface-dark-card/90 backdrop-blur-md shadow-md hover:border-accent-500/40 dark:hover:border-accent-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-slate-100 dark:border-surface-dark-border/60">
                  <div className="p-1.5 rounded-md bg-accent-500/10 text-accent-600 dark:text-accent-400">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white font-mono">
                    Currently Exploring
                  </h3>
                </div>

                <ul className="space-y-1.5">
                  {profileData.currentlyLearning.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
