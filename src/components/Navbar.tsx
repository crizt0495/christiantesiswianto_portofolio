'use client';

import { Github, Linkedin, Menu, X } from 'lucide-react';
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50'
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
              className="text-base font-semibold text-zinc-100 hover:text-white transition-colors"
            >
              Christian Tesiswianto
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900/50',
                  'flex items-center justify-center',
                  'text-zinc-400 hover:text-zinc-100 hover:border-zinc-700',
                  'transition-colors duration-200'
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
                  'w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900/50',
                  'flex items-center justify-center',
                  'text-zinc-400 hover:text-zinc-100 hover:border-zinc-700',
                  'transition-colors duration-200'
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
                'md:hidden w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900/50',
                'flex items-center justify-center',
                'text-zinc-400 hover:text-zinc-100',
                'transition-colors duration-200'
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
          'fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl md:hidden',
          'transition-all duration-300',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-2xl text-zinc-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-8">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'w-11 h-11 rounded-lg border border-zinc-800 bg-zinc-900/50',
                'flex items-center justify-center',
                'text-zinc-400 hover:text-zinc-100',
                'transition-colors duration-200'
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
                'w-11 h-11 rounded-lg border border-zinc-800 bg-zinc-900/50',
                'flex items-center justify-center',
                'text-zinc-400 hover:text-zinc-100',
                'transition-colors duration-200'
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
