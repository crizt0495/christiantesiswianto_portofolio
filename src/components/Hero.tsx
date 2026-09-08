'use client';

import { MessageSquare, Play, Code2, Database, Boxes } from 'lucide-react';
import { personal } from '@/data/portfolioData';
import { AnimatedBackground } from './AnimatedBackground';
import { Badge } from './Badge';
import { Button } from './Button';
import { scrollToSection } from '@/lib/utils';

const technologies = ['Golang', 'Next.js', 'PostgreSQL', 'MySQL'];

const stats = [
  { value: '2+', label: 'Years Building' },
  { value: '10+', label: 'Production Apps' },
  { value: '100%', label: 'Commitment' },
];

export function Hero() {
  const handleScroll = (href: string) => {
    scrollToSection(href);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <Badge variant="green" className="mb-6 text-sm">
              <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse" />
              {personal.availability}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text dark:text-dark-text leading-[1.05] mb-6 uppercase tracking-tight">
              Building <span className="text-accent">Reliable</span> Digital Solutions with{' '}
              <span className="text-accent">Golang</span> &amp;{' '}
              <span className="text-accent-vivid">Modern Web</span>
            </h1>

            <p className="text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-9 max-w-xl">
              {personal.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
              <Button
                variant="primary"
                size="lg"
                icon={<Play className="w-4 h-4 fill-current" />}
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

            <div className="flex flex-wrap items-center gap-2 mb-10">
              <span className="text-xs font-bold text-text-muted dark:text-dark-text-muted uppercase tracking-widest mr-1">
                Tech Stack:
              </span>
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-[11px]">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              {stats.map((stat) => (
                <div key={stat.label} className="nb-card-flat p-3 text-center">
                  <div className="text-lg font-bold text-text dark:text-dark-text">{stat.value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-text-muted dark:text-dark-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card - code window */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-accent-vivid/20 blur-2xl" aria-hidden="true" />
            <div className="relative nb-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b-3 border-border dark:border-dark-border bg-bg-alt dark:bg-dark-bg-alt">
                <span className="w-3 h-3 rounded-full bg-accent-vivid" />
                <span className="w-3 h-3 rounded-full bg-accent-yellow" />
                <span className="w-3 h-3 rounded-full bg-accent-green" />
                <span className="ml-3 text-xs font-mono font-semibold text-text-secondary dark:text-dark-text-secondary">
                  developer.go
                </span>
              </div>
              <pre className="p-5 text-[13px] leading-6 font-mono overflow-hidden bg-bg dark:bg-dark-bg">
                <code>
                  <span className="text-text-muted dark:text-dark-text-muted">{'// building reliable software'}</span>
                  {'\n'}
                  <span className="text-accent-vivid">func</span>{' '}
                  <span className="text-accent">profile</span>
                  <span className="text-text dark:text-dark-text">()</span>{' '}
                  <span className="text-accent-vivid">Developer</span>{' '}
                  <span className="text-text dark:text-dark-text">{'{'}</span>
                  {'\n'}  <span className="text-accent-vivid">return</span>{' '}
                  <span className="text-accent-vivid">Developer</span>
                  <span className="text-text dark:text-dark-text">{'{'}</span>
                  {'\n'}    <span className="text-accent">Name</span>
                  <span className="text-text dark:text-dark-text">:</span>{' '}
                  <span className="text-accent-green">{'&quot;Christian&quot;'}</span>
                  <span className="text-text dark:text-dark-text">,</span>
                  {'\n'}    <span className="text-accent">Role</span>
                  <span className="text-text dark:text-dark-text">:</span>{' '}
                  <span className="text-accent-green">{'&quot;Full-Stack&quot;'}</span>
                  <span className="text-text dark:text-dark-text">,</span>
                  {'\n'}    <span className="text-accent">Stack</span>
                  <span className="text-text dark:text-dark-text">:</span>{' '}
                  <span className="text-accent-green">{'&quot;Go · Next.js&quot;'}</span>
                  <span className="text-text dark:text-dark-text">,</span>
                  {'\n'}    <span className="text-accent">DB</span>
                  <span className="text-text dark:text-dark-text">:</span>{' '}
                  <span className="text-accent-green">{'&quot;PostgreSQL · MySQL&quot;'}</span>
                  <span className="text-text dark:text-dark-text">,</span>
                  {'\n'}  <span className="text-text dark:text-dark-text">{'}'}</span>
                  {'\n'}
                  <span className="text-text dark:text-dark-text">{'}'}</span>
                </code>
              </pre>
            </div>

            <div className="absolute -top-5 -right-4 nb-card-flat px-3 py-2 flex items-center gap-2 bg-accent text-white border-border">
              <Code2 className="w-3.5 h-3.5" />
              <span className="text-xs font-bold">Go</span>
            </div>
            <div className="absolute -bottom-5 -left-4 nb-card-flat px-3 py-2 flex items-center gap-2 bg-text dark:bg-dark-text text-bg dark:text-dark-bg border-border dark:border-dark-border">
              <Database className="w-3.5 h-3.5" />
              <span className="text-xs font-bold text-bg dark:text-dark-bg">PostgreSQL</span>
            </div>
            <div className="absolute top-1/2 -right-8 nb-card-flat px-3 py-2 flex items-center gap-2 bg-accent-vivid text-white border-border">
              <Boxes className="w-3.5 h-3.5" />
              <span className="text-xs font-bold">Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
