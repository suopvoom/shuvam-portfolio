import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from './Container';

export interface SectionWrapperProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  headerCentered?: boolean;
}

/**
 * Standardized SectionWrapper with scroll-triggered entrance animation,
 * consistent easing [0.16, 1, 0.3, 1], and reduced-motion compliance.
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  containerSize = 'lg',
  headerCentered = false,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={`py-20 sm:py-28 relative overflow-hidden ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <Container size={containerSize}>
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {(eyebrow || title || subtitle) && (
            <div className={`mb-12 sm:mb-16 ${headerCentered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
              {eyebrow && (
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-[2px] bg-accent-500 rounded-full" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent-700 dark:text-accent-400 font-mono">
                    {eyebrow}
                  </span>
                </div>
              )}
              <h2
                id={`${id}-heading`}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white"
              >
                {title}
              </h2>
              {subtitle && (
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-400 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </motion.div>
      </Container>
    </section>
  );
};
