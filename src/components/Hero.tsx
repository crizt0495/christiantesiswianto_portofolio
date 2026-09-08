'use client';

import { ArrowRight, MessageSquare } from 'lucide-react';
import { personal } from '@/data/portfolioData';
import { AnimatedBackground } from './AnimatedBackground';
import { Badge } from './Badge';
import { Button } from './Button';
import { scrollToSection } from '@/lib/utils';

const technologies = ['Golang', 'Next.js', 'PostgreSQL', 'MySQL'];

export function Hero() {
  const handleScroll = (href: string) => {
    scrollToSection(href);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <Badge variant="green" className="mb-6 text-sm">
            <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse" />
            {personal.title}
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text dark:text-dark-text leading-[1.1] mb-6 uppercase tracking-tight">
            {personal.tagline.split(' ').map((word, i) => {
              const highlightWords = ['Go', 'Modern', 'Web', 'Technologies'];
              if (highlightWords.includes(word)) {
                return (
                  <span key={i} className="text-accent">
                    {word}{' '}
                  </span>
                );
              }
              return word + ' ';
            })}
          </h1>

          <p className="text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-10 max-w-2xl">
            {personal.description}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-12">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => handleScroll('#projects')}
            >
              View My Projects
            </Button>
            <Button
              variant="accent"
              size="lg"
              icon={<MessageSquare className="w-4 h-4" />}
              onClick={() => handleScroll('#contact')}
            >
              Let&apos;s Work Together
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-text-muted dark:text-dark-text-muted uppercase tracking-wider mr-2">
              Tech Stack:
            </span>
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
