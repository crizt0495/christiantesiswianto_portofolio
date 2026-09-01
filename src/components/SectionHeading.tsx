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
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">{title}</h2>
      {subtitle && <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
