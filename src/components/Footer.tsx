import React from 'react';
import { Container } from './ui/Container';
import { profileData } from '../data/profile';
import { Github, Linkedin, Mail, Phone, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-surface-dark-border/80 bg-white/75 dark:bg-[#0c0f17]/75 backdrop-blur-md transition-colors duration-300">
      <Container size="xl">
        <div className="py-12 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-display font-bold text-lg text-slate-900 dark:text-white">
              <span className="w-7 h-7 rounded-md bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-accent-700 dark:text-accent-400 font-mono text-xs font-bold">
                SC
              </span>
              <span>{profileData.name}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              BCA Student at IEM Kolkata &amp; Aspiring Software Developer. Dedicated to craftsmanship in code, computer science fundamentals, and system design.
            </p>
          </div>

          {/* Social & Contact Links */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${profileData.phoneRaw}`}
              aria-label="Call Direct Phone"
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-accent-700 dark:hover:text-accent-400 hover:bg-white/80 dark:hover:bg-surface-dark-elevated border border-slate-200/80 dark:border-surface-dark-border transition-all focus-visible:ring-2 focus-visible:ring-accent-500 shadow-2xs"
              title={profileData.phone}
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-accent-700 dark:hover:text-accent-400 hover:bg-white/80 dark:hover:bg-surface-dark-elevated border border-slate-200/80 dark:border-surface-dark-border transition-all focus-visible:ring-2 focus-visible:ring-accent-500 shadow-2xs"
              title={profileData.email}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-accent-700 dark:hover:text-accent-400 hover:bg-white/80 dark:hover:bg-surface-dark-elevated border border-slate-200/80 dark:border-surface-dark-border transition-all focus-visible:ring-2 focus-visible:ring-accent-500 shadow-2xs"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-accent-700 dark:hover:text-accent-400 hover:bg-white/80 dark:hover:bg-surface-dark-elevated border border-slate-200/80 dark:border-surface-dark-border transition-all focus-visible:ring-2 focus-visible:ring-accent-500 shadow-2xs"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-accent-700 dark:hover:text-accent-400 hover:bg-white/80 dark:hover:bg-surface-dark-elevated border border-slate-200/80 dark:border-surface-dark-border transition-all focus-visible:ring-2 focus-visible:ring-accent-500 ml-2 shadow-2xs"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year and Craft Credit */}
        <div className="py-6 border-t border-slate-200/60 dark:border-surface-dark-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-accent-500 fill-accent-500/30" />
            <span>using React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
