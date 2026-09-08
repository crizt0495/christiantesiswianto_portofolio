'use client';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-16', className)}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text dark:text-dark-text mb-4 uppercase tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-20 h-1 bg-accent rounded-full" />
    </div>
  );
}
