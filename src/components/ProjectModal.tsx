import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Project } from '../data/types';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { X, Github, ExternalLink, CheckCircle2, Code2, Briefcase, Lightbulb, Sparkles } from 'lucide-react';

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  triggerElementRef?: HTMLElement | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  triggerElementRef,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management & Escape key handling
  useEffect(() => {
    if (!isOpen || !project) return;

    // Focus close button on open
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      // Focus trap within modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';

      // Return focus to triggering element on close
      if (triggerElementRef) {
        triggerElementRef.focus();
      }
    };
  }, [isOpen, project, onClose, triggerElementRef]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        aria-describedby="modal-project-desc"
      >
        <motion.div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl glass-modal p-6 sm:p-8 shadow-2xl border border-slate-200/80 dark:border-surface-dark-border"
        >
          {/* Close button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-surface-dark-elevated transition-colors focus-visible:ring-2 focus-visible:ring-accent-500 border border-transparent hover:border-slate-200/80 dark:hover:border-slate-700"
            aria-label="Close project details modal (Escape)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badges: Status & Internship Task */}
          <div className="flex flex-wrap items-center gap-2 mb-4 pr-10">
            <Badge variant="status" status={project.status}>
              {project.status}
            </Badge>

            {project.internshipTask && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-500/10 text-accent-800 dark:text-accent-400 border border-accent-500/25 text-xs font-mono font-medium">
                <Briefcase className="w-3 h-3 text-accent-500" />
                {project.internshipTask}
              </span>
            )}
          </div>

          {/* Title & Language */}
          <h3
            id="modal-project-title"
            className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight"
          >
            {project.title}
          </h3>

          <div className="flex items-center gap-2 mt-2 font-mono text-xs text-accent-800 dark:text-accent-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>Language: <strong>{project.language}</strong></span>
          </div>

          {/* Description */}
          <p
            id="modal-project-desc"
            className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {project.description}
          </p>

          {/* Key Features List */}
          <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-surface-dark-border/60">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-3 font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-500" />
              Core Functionality &amp; Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Concepts Learned (where applicable) */}
          {project.concepts && project.concepts.length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-surface-dark-border/60">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-3 font-mono flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-accent-500" />
                Key Computer Science Concepts
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.concepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-accent-500/10 text-accent-800 dark:text-accent-300 border border-accent-500/25"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies & Frameworks */}
          <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-surface-dark-border/60">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
              Technologies &amp; Libraries
            </span>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/80 dark:bg-surface-dark-elevated text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-surface-dark-border font-medium">
                {project.language}
              </span>
              {project.frameworkOrTools.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-white/70 dark:bg-surface-dark-elevated text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-surface-dark-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer: Real GitHub Repo Link & Live Demo (only if exists) */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-surface-dark-border/60 flex flex-wrap items-center justify-between gap-4">
            <Button
              href={project.githubUrl}
              external
              variant="primary"
              size="md"
              icon={<Github className="w-4 h-4" />}
            >
              View Repository on GitHub
            </Button>

            {project.liveDemoUrl && (
              <Button
                href={project.liveDemoUrl}
                external
                variant="secondary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Live Demo
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="ml-auto"
            >
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
