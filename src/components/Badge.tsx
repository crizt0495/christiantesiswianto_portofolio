'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variant === 'default' && 'bg-gradient-to-r from-indigo-500/15 to-violet-500/15 text-indigo-600 border-indigo-500/25 dark:from-indigo-500/15 dark:to-violet-500/15 dark:text-indigo-200 dark:border-indigo-400/25',
        variant === 'outline' && 'bg-zinc-100 text-zinc-600 border-zinc-300 dark:bg-white/5 dark:text-zinc-300 dark:border-white/10',
        className
      )}
    >
      {children}
    </span>
  );
}
