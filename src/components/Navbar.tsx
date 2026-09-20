import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavLinkItem {
  name: string;
  href: string;
  id: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Certifications', href: '#certifications', id: 'certifications' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Monitor scroll for shadow and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = NAV_LINKS.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm dark:shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <Container size="xl">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Task 2: Pure Typographic Signature Brand Mark (No SC icon box) */}
          <a
            href="#"
            className="group inline-flex items-center text-lg sm:text-xl tracking-tight transition-colors focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md py-1"
            aria-label="Shuvam Chowdhury Home"
          >
            <span className="font-display font-bold text-slate-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              Shuvam
            </span>
            <span className="font-display font-light text-slate-600 dark:text-slate-300 ml-1.5 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              Chowdhury
            </span>
            <span className="text-accent-500 font-bold ml-0.5 text-xl leading-none">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-accent-500 ${
                    isActive
                      ? 'text-accent-600 dark:text-accent-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action: Theme Toggle & Contact Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-surface-dark-elevated border border-transparent hover:border-surface-light-border dark:hover:border-surface-dark-border transition-all focus-visible:ring-2 focus-visible:ring-accent-500"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-accent-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            <Button
              href="#contact"
              variant="outline"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-surface-dark-elevated transition-colors focus-visible:ring-2 focus-visible:ring-accent-500"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-4 h-4 text-accent-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-surface-dark-elevated transition-colors focus-visible:ring-2 focus-visible:ring-accent-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] z-40 bg-black/60 backdrop-blur-md lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white dark:bg-surface-dark-card border-b border-surface-light-border dark:border-surface-dark-border px-6 py-8 shadow-xl max-h-[calc(100vh-60px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Brand Wordmark */}
            <div className="pb-4 mb-4 border-b border-slate-100 dark:border-surface-dark-border/50">
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Shuvam <span className="font-light text-slate-500 dark:text-slate-400">Chowdhury</span>
                <span className="text-accent-500 font-bold ml-0.5">.</span>
              </span>
              <p className="text-xs font-mono text-slate-400 mt-0.5">Software Developer &bull; BCA @ IEM</p>
            </div>

            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-base font-medium py-2 border-b border-slate-100 dark:border-surface-dark-border/50 ${
                      isActive
                        ? 'text-accent-600 dark:text-accent-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-accent-500" />}
                  </a>
                );
              })}

              <div className="pt-4">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
