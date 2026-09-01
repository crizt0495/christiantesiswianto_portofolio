'use client';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, eyebrow, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-16', className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">
          {eyebrow}
        </span>
      )}
      <div className="w-14 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full mx-auto" />
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mt-5">{title}</h2>
      {subtitle && <p className="text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed">{subtitle}</p>}
    </div>
  );
}