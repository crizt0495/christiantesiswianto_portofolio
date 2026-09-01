'use client';

import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
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
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variant === 'primary' && 'bg-white text-zinc-900 hover:bg-zinc-200',
    variant === 'secondary' &&
      'bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 hover:bg-zinc-800 hover:text-zinc-100',
    variant === 'ghost' && 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50',
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
