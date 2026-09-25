import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  download?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

/**
 * Reusable Button primitive adhering to the 'Modern Editorial' design system.
 * Accessible focus states, consistent hover micro-lifts (-translate-y-0.5), and dual button/anchor support.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  download,
  icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-surface-dark select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-accent-500 text-slate-950 hover:bg-accent-400 active:bg-accent-600 shadow-sm font-semibold hover:shadow-amber-soft disabled:opacity-50 disabled:pointer-events-none',
    secondary: 'bg-white/80 dark:bg-surface-dark-elevated/80 backdrop-blur-xs text-slate-900 dark:text-slate-100 hover:bg-white dark:hover:bg-surface-dark-muted border border-slate-200/80 dark:border-surface-dark-border shadow-xs disabled:opacity-50 disabled:pointer-events-none',
    outline: 'border border-slate-200/90 dark:border-surface-dark-border text-slate-800 dark:text-slate-200 hover:border-accent-500/80 hover:text-accent-700 dark:hover:text-accent-400 bg-white/50 dark:bg-surface-dark-card/40 backdrop-blur-xs disabled:opacity-40 disabled:pointer-events-none',
    ghost: 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-surface-dark-elevated/60 bg-transparent disabled:opacity-40 disabled:pointer-events-none',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={`${combinedStyles} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
        aria-disabled={disabled}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      className={combinedStyles}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
