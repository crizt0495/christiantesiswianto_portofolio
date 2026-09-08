'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border-3 border-border dark:border-dark-border bg-white dark:bg-dark-bg-card" aria-hidden="true" />
    );
  }

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const Icon = theme === 'system' ? Monitor : resolvedTheme === 'dark' ? Sun : Moon;
  const label = theme === 'system' ? 'System theme' : theme === 'dark' ? 'Light theme' : 'Dark theme';

  return (
    <button
      onClick={cycleTheme}
      className={cn(
        'w-9 h-9 rounded-lg border-3 border-border dark:border-dark-border bg-white dark:bg-dark-bg-card',
        'flex items-center justify-center',
        'text-text dark:text-dark-text hover:bg-bg-alt dark:hover:bg-dark-bg-alt',
        'shadow-[2px_2px_0_var(--color-shadow)] dark:shadow-[2px_2px_0_var(--color-dark-shadow)]',
        'hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_var(--color-shadow)] dark:hover:shadow-[1px_1px_0_var(--color-dark-shadow)]',
        'active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
        'transition-all duration-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
      )}
      aria-label={`Current: ${label}. Click to change theme.`}
      title={label}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}
