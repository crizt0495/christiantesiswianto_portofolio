'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { personal } from '@/data/portfolioData';
import { AnimatedBackground } from './AnimatedBackground';
import { Badge } from './Badge';
import { Button } from './Button';
import { scrollToSection } from '@/lib/utils';

const technologies = ['Golang', 'Next.js', 'PostgreSQL', 'MySQL'];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export function Hero() {
  const handleScroll = (href: string) => {
    scrollToSection(href);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse-soft" />
                {personal.availability}
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 leading-[1.1] mb-6 tracking-tight"
            >
              Building <span className="text-gradient">Reliable</span> Digital Solutions with{' '}
              <span className="text-gradient">Golang</span> &amp; Modern Web
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-9 max-w-xl"
            >
              {personal.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-12"
            >
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
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-zinc-500 mr-2">Tech Stack:</span>
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="hidden lg:block relative"
          >
            <div
              className="absolute -inset-8 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-violet-500/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative animate-float rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-indigo-950/40 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-zinc-500 font-mono">developer.go</span>
              </div>
              <pre className="p-5 text-[13px] leading-6 font-mono overflow-hidden">
                <code>
                  <span className="text-zinc-600">{'// building reliable software'}</span>
                  {'\n'}
                  <span className="text-violet-400">func</span>{' '}
                  <span className="text-sky-300">profile</span>
                  <span className="text-zinc-400">()</span>{' '}
                  <span className="text-violet-400">Developer</span>{' '}
                  <span className="text-zinc-400">{'{'}</span>
                  {'\n'}  <span className="text-violet-400">return</span>{' '}
                  <span className="text-violet-400">Developer</span>
                  <span className="text-zinc-400">{'{'}</span>
                  {'\n'}    <span className="text-sky-300">Name</span>
                  <span className="text-zinc-400">:</span>{' '}
                  <span className="text-emerald-400">{'&quot;Christian&quot;'}</span>
                  <span className="text-zinc-400">,</span>
                  {'\n'}    <span className="text-sky-300">Role</span>
                  <span className="text-zinc-400">:</span>{' '}
                  <span className="text-emerald-400">{'&quot;Full-Stack&quot;'}</span>
                  <span className="text-zinc-400">,</span>
                  {'\n'}    <span className="text-sky-300">Stack</span>
                  <span className="text-zinc-400">:</span>{' '}
                  <span className="text-emerald-400">{'&quot;Go · Next.js&quot;'}</span>
                  <span className="text-zinc-400">,</span>
                  {'\n'}    <span className="text-sky-300">DB</span>
                  <span className="text-zinc-400">:</span>{' '}
                  <span className="text-emerald-400">{'&quot;PostgreSQL · MySQL&quot;'}</span>
                  <span className="text-zinc-400">,</span>
                  {'\n'}  <span className="text-zinc-400">{'}'}</span>
                  {'\n'}
                  <span className="text-zinc-400">{'}'}</span>
                </code>
              </pre>
            </div>

            <div className="absolute -top-6 -right-4 animate-float-delayed card-hover rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-white/10 dark:bg-zinc-900/90 backdrop-blur px-4 py-2.5 flex items-center gap-2.5">
              <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">REST API</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            <div className="absolute -bottom-6 -left-6 animate-float rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-white/10 dark:bg-zinc-900/90 backdrop-blur px-4 py-2.5 flex items-center gap-2.5">
              <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">PostgreSQL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}