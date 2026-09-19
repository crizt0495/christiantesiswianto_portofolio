import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <div className="bg-emerald-blob animate-blob absolute -top-[25%] -right-[12%] h-[80%] w-[80%] rounded-full" />
      <div className="bg-gold-blob animate-blob-slow absolute -bottom-[30%] -left-[10%] h-[65%] w-[65%] rounded-full" />
      <div className="bg-grid-pattern absolute inset-0" />
    </div>
  );
}