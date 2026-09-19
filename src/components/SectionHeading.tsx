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
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
          <span className="w-2 h-2 rounded-sm bg-accent inline-block" />
          {eyebrow}
          <span className="w-2 h-2 rounded-sm bg-accent inline-block" />
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text dark:text-dark-text mb-4 uppercase tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-1">
        <span className="w-8 h-1 bg-accent rounded-full" />
        <span className="w-2 h-1 bg-accent-vivid rounded-full" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="w-2 h-1 bg-accent-vivid rounded-full" />
        <span className="w-8 h-1 bg-accent rounded-full" />
      </div>
    </div>
  );
}
