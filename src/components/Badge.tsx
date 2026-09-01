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
        variant === 'default' && 'bg-zinc-800/50 text-zinc-300 border border-zinc-700/50',
        variant === 'outline' && 'bg-transparent text-zinc-400 border border-zinc-700',
        className
      )}
    >
      {children}
    </span>
  );
}
