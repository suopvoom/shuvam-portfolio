import React from 'react';
import { ProjectStatus, SkillProficiency } from '../../data/types';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'status' | 'proficiency' | 'outline' | 'accent';
  status?: ProjectStatus;
  proficiency?: SkillProficiency;
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Visual badge/tag primitive.
 * Enforces honest, distinct styling for project statuses and skill proficiencies.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  status,
  proficiency,
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-medium tracking-wide',
    md: 'text-xs px-2.5 py-1 font-medium tracking-wide',
  };

  // Status-specific badges
  if (variant === 'status' || status) {
    const currentStatus = status || (children as ProjectStatus);
    const statusMap: Record<ProjectStatus, string> = {
      Completed: 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30',
      'In Progress': 'bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/35 font-semibold',
      Planned: 'bg-indigo-500/15 text-indigo-900 dark:text-indigo-300 border border-indigo-500/30',
    };

    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full ${sizeStyles[size]} ${
          statusMap[currentStatus] || statusMap['Completed']
        } ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80 animate-pulse" />
        {children || currentStatus}
      </span>
    );
  }

  // Proficiency-specific badges
  if (variant === 'proficiency' || proficiency) {
    const currentProficiency = proficiency || (children as SkillProficiency);
    const profMap: Record<SkillProficiency, string> = {
      'Comfortable with': 'bg-accent-500/15 text-accent-800 dark:text-accent-300 border border-accent-500/30 font-semibold',
      'Moderate / Learning': 'bg-sky-500/15 text-sky-800 dark:text-sky-300 border border-sky-500/25',
      Proficient: 'bg-accent-500/15 text-accent-800 dark:text-accent-300 border border-accent-500/30 font-semibold',
      Comfortable: 'bg-sky-500/15 text-sky-800 dark:text-sky-300 border border-sky-500/25',
      Familiar: 'bg-slate-200/80 dark:bg-surface-dark-muted/70 text-slate-800 dark:text-slate-300 border border-slate-300/80 dark:border-surface-dark-border',
      Learning: 'bg-violet-500/15 text-violet-900 dark:text-violet-300 border border-violet-500/25',
    };

    return (
      <span
        className={`inline-flex items-center rounded-md ${sizeStyles[size]} ${
          profMap[currentProficiency] || profMap['Comfortable with']
        } ${className}`}
      >
        {children || currentProficiency}
      </span>
    );
  }

  // Accent badge
  if (variant === 'accent') {
    return (
      <span
        className={`inline-flex items-center rounded-md bg-accent-500/15 text-accent-800 dark:text-accent-300 border border-accent-500/25 font-medium ${sizeStyles[size]} ${className}`}
      >
        {children}
      </span>
    );
  }

  // Outline badge
  if (variant === 'outline') {
    return (
      <span
        className={`inline-flex items-center rounded-md border border-slate-200/90 dark:border-surface-dark-border text-slate-700 dark:text-slate-300 bg-white/40 dark:bg-surface-dark-card/40 backdrop-blur-xs ${sizeStyles[size]} ${className}`}
      >
        {children}
      </span>
    );
  }

  // Default neutral badge
  return (
    <span
      className={`inline-flex items-center rounded-md bg-white/80 dark:bg-surface-dark-elevated text-slate-800 dark:text-slate-300 border border-slate-200/80 dark:border-surface-dark-border shadow-2xs ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
