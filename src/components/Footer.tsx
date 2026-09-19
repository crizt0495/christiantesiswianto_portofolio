import { Linkedin } from 'lucide-react';
import { personal, navLinks, socials } from '@/data/portfolioData';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-3 border-border dark:border-dark-border bg-bg dark:bg-dark-bg py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-sm font-bold text-text dark:text-dark-text uppercase tracking-tight">
            {personal.name}
          </h2>
          <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-1 font-medium">
            {personal.title}
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-3">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border-3 border-border dark:border-dark-border bg-white dark:bg-dark-bg-card flex items-center justify-center text-text dark:text-dark-text hover:bg-bg-alt dark:hover:bg-dark-bg-alt transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted dark:text-dark-text-muted">
            &copy; {year} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
