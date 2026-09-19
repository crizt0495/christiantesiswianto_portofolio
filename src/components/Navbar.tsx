'use client';

import { Linkedin, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn, scrollToSection } from '@/lib/utils';
import { navLinks, socials } from '@/data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          isScrolled
            ? 'bg-bg/90 dark:bg-dark-bg/90 backdrop-blur-md border-b-3 border-border dark:border-dark-border'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-base font-bold text-text dark:text-dark-text uppercase tracking-tight hover:text-accent transition-colors"
            >
              CT<span className="text-accent">.</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xs font-semibold uppercase tracking-wide text-text-secondary dark:text-dark-text-secondary hover:text-text dark:hover:text-dark-text hover:bg-bg-alt dark:hover:bg-dark-bg-alt px-3 py-2 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'w-9 h-9 rounded-lg border-3 border-border dark:border-dark-border bg-white dark:bg-dark-bg-card',
                  'flex items-center justify-center',
                  'text-text dark:text-dark-text hover:bg-bg-alt dark:hover:bg-dark-bg-alt',
                  'shadow-[3px_3px_0_var(--color-shadow)] dark:shadow-[3px_3px_0_var(--color-dark-shadow)]',
                  'active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
                  'transition-all duration-100'
                )}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <ThemeToggle />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'md:hidden w-10 h-10 rounded-lg border-3 border-border dark:border-dark-border bg-white dark:bg-dark-bg-card',
                'flex items-center justify-center',
                'text-text dark:text-dark-text hover:bg-bg-alt dark:hover:bg-dark-bg-alt',
                'shadow-[3px_3px_0_var(--color-shadow)] dark:shadow-[3px_3px_0_var(--color-dark-shadow)]',
                'active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
                'transition-all duration-100'
              )}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-bg dark:bg-dark-bg md:hidden',
          'transition-all duration-300',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-2xl font-bold uppercase tracking-tight text-text dark:text-dark-text hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-6">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'w-12 h-12 rounded-lg border-3 border-border dark:border-dark-border bg-white dark:bg-dark-bg-card',
                'flex items-center justify-center',
                'text-text dark:text-dark-text hover:bg-bg-alt dark:hover:bg-dark-bg-alt',
                'shadow-[3px_3px_0_var(--color-shadow)] dark:shadow-[3px_3px_0_var(--color-dark-shadow)]',
                'active:translate-x-[3px] active:translate-y-[3px] active:shadow-none',
                'transition-all duration-100'
              )}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </>
  );
}
