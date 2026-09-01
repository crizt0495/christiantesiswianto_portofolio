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
    variant === 'primary' &&
      'bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25 hover:brightness-110 hover:shadow-indigo-500/40',
    variant === 'secondary' &&
      'bg-white/5 text-zinc-200 border border-white/10 hover:bg-white/10 hover:text-white',
    variant === 'ghost' && 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5',
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
