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
      Completed: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
      'In Progress': 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20',
      Planned: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20',
    };

    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full ${sizeStyles[size]} ${
          statusMap[currentStatus] || statusMap['Completed']
        } ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 animate-pulse" />
        {children || currentStatus}
      </span>
    );
  }

  // Proficiency-specific badges
  if (variant === 'proficiency' || proficiency) {
    const currentProficiency = proficiency || (children as SkillProficiency);
    const profMap: Record<SkillProficiency, string> = {
      'Comfortable with': 'bg-accent-500/15 text-accent-700 dark:text-accent-300 border border-accent-500/30 font-semibold',
      'Moderate / Learning': 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20',
      Proficient: 'bg-accent-500/15 text-accent-700 dark:text-accent-300 border border-accent-500/30 font-semibold',
      Comfortable: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20',
      Familiar: 'bg-slate-200/70 dark:bg-surface-dark-muted/70 text-slate-700 dark:text-slate-300 border border-surface-light-border dark:border-surface-dark-border',
      Learning: 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20',
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
        className={`inline-flex items-center rounded-md bg-accent-500/10 text-accent-700 dark:text-accent-400 border border-accent-500/20 ${sizeStyles[size]} ${className}`}
      >
        {children}
      </span>
    );
  }

  // Outline badge
  if (variant === 'outline') {
    return (
      <span
        className={`inline-flex items-center rounded-md border border-surface-light-border dark:border-surface-dark-border text-slate-600 dark:text-slate-300 bg-transparent ${sizeStyles[size]} ${className}`}
      >
        {children}
      </span>
    );
  }

  // Default neutral badge
  return (
    <span
      className={`inline-flex items-center rounded-md bg-slate-100 dark:bg-surface-dark-elevated text-slate-700 dark:text-slate-300 border border-surface-light-border dark:border-surface-dark-border ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
