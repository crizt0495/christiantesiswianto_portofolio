'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'accent' | 'green' | 'yellow' | 'pink';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold border-3 uppercase tracking-wide',
        variant === 'default' && 'bg-white dark:bg-dark-bg-card border-border dark:border-dark-border text-text dark:text-dark-text',
        variant === 'outline' && 'bg-transparent border-border dark:border-dark-border text-text dark:text-dark-text',
        variant === 'accent' && 'bg-accent border-border dark:border-dark-border text-white',
        variant === 'green' && 'bg-accent-green border-border dark:border-dark-border text-white',
        variant === 'yellow' && 'bg-accent-yellow border-border dark:border-dark-border text-text dark:text-dark-text',
        variant === 'pink' && 'bg-accent-pink border-border dark:border-dark-border text-white',
        className
      )}
    >
      {children}
    </span>
  );
}
