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
      <div className="w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900/50" aria-hidden="true" />
    );
  }

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const Icon = theme === 'system' ? Monitor : resolvedTheme === 'dark' ? Moon : Sun;
  const label = theme === 'system' ? 'System theme' : theme === 'dark' ? 'Dark theme' : 'Light theme';

  return (
    <button
      onClick={cycleTheme}
      className={cn(
        'w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900/50',
        'flex items-center justify-center',
        'text-zinc-400 hover:text-zinc-100 hover:border-zinc-700',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50'
      )}
      aria-label={`Current: ${label}. Click to change theme.`}
      title={label}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}
