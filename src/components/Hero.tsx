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
          <Badge className="mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
            {personal.title}
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-100 leading-tight mb-6 tracking-tight">
            {personal.tagline}
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
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
              variant="secondary"
              size="lg"
              icon={<MessageSquare className="w-4 h-4" />}
              onClick={() => handleScroll('#contact')}
            >
              Let&apos;s Work Together
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-zinc-500 mr-2">Tech Stack:</span>
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
