'use client';

import { Github, Linkedin, Menu, X, Code2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn, scrollToSection } from '@/lib/utils';
import { navLinks, socials } from '@/data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/80 dark:bg-zinc-950/75 backdrop-blur-xl border-b border-zinc-200/70 dark:border-white/5'
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
              className="flex items-center gap-2.5 group"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
                <Code2 className="w-4 h-4 text-white" />
              </span>
              <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                Christian Tesiswianto
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={cn(
                      'relative text-sm py-1.5 transition-colors',
                      isActive
                        ? 'text-zinc-900 dark:text-white'
                        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute left-0 -bottom-0.5 h-px w-full bg-gradient-to-r from-blue-500 to-violet-500 transition-opacity duration-300',
                        isActive ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </a>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200',
                  'border-zinc-200 bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:border-indigo-500/50',
                  'dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white dark:hover:border-indigo-400/40'
                )}
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200',
                  'border-zinc-200 bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:border-indigo-500/50',
                  'dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white dark:hover:border-indigo-400/40'
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
                'md:hidden w-10 h-10 rounded-lg border flex items-center justify-center transition-colors duration-200',
                'border-zinc-200 bg-zinc-100 text-zinc-600 hover:text-zinc-900',
                'dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white'
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
          'fixed inset-0 z-40 backdrop-blur-xl md:hidden transition-all duration-300',
          'bg-white/95 dark:bg-zinc-950/95',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-glow-orb opacity-60" aria-hidden="true" />
        <nav className="relative flex flex-col items-center justify-center h-full gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  'text-2xl transition-colors',
                  isActive ? 'font-semibold text-zinc-900 dark:text-white text-gradient' : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                )}
              >
                {link.label}
              </a>
            );
          })}
          <div className="flex items-center gap-3 mt-8">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'w-11 h-11 rounded-lg border flex items-center justify-center transition-colors duration-200',
                'border-zinc-200 bg-zinc-100 text-zinc-600 hover:text-zinc-900',
                'dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white'
              )}
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'w-11 h-11 rounded-lg border flex items-center justify-center transition-colors duration-200',
                'border-zinc-200 bg-zinc-100 text-zinc-600 hover:text-zinc-900',
                'dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white'
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