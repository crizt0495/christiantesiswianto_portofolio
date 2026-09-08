'use client';

import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide border-3 border-border dark:border-dark-border rounded-lg transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg dark:focus-visible:ring-offset-dark-bg',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
    variant === 'primary' &&
      'bg-text dark:bg-dark-text text-bg dark:text-dark-bg hover:bg-accent hover:text-white shadow-[4px_4px_0_var(--color-shadow)] dark:shadow-[4px_4px_0_var(--color-dark-shadow)]',
    variant === 'secondary' &&
      'bg-white dark:bg-dark-bg-card text-text dark:text-dark-text hover:bg-bg-alt dark:hover:bg-dark-bg-alt shadow-[4px_4px_0_var(--color-shadow)] dark:shadow-[4px_4px_0_var(--color-dark-shadow)]',
    variant === 'accent' &&
      'bg-accent text-white hover:bg-accent-hover shadow-[4px_4px_0_var(--color-shadow)] dark:shadow-[4px_4px_0_var(--color-dark-shadow)]',
    variant === 'ghost' &&
      'border-transparent dark:border-transparent bg-transparent text-text dark:text-dark-text hover:bg-bg-alt dark:hover:bg-dark-bg-alt hover:border-border dark:hover:border-dark-border shadow-none hover:shadow-[4px_4px_0_var(--color-shadow)] dark:hover:shadow-[4px_4px_0_var(--color-dark-shadow)]',
    size === 'sm' && 'text-xs px-3 py-1.5',
    size === 'md' && 'text-sm px-4 py-2',
    size === 'lg' && 'text-sm px-6 py-3',
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseStyles}
      >
        {icon}
        {children}
        {external && <ExternalLink className="w-3.5 h-3.5 opacity-50" />}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {icon}
      {children}
      {external && <ExternalLink className="w-3.5 h-3.5 opacity-50" />}
    </button>
  );
}
