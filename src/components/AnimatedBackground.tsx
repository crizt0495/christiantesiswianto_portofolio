'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let gridOffset = 0;

    const isDark = document.documentElement.classList.contains('dark');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 60;
      const lineWidth = 2;
      const opacity = isDark ? 0.06 : 0.08;

      ctx.strokeStyle = isDark
        ? `rgba(255, 255, 255, ${opacity})`
        : `rgba(0, 0, 0, ${opacity})`;
      ctx.lineWidth = lineWidth;

      const offsetY = gridOffset % gridSize;

      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = -gridSize + offsetY; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawAccentShapes = () => {
      if (!ctx || !canvas) return;
      const centerX = canvas.width * 0.75;
      const centerY = canvas.height * 0.3;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, isDark ? 'rgba(15, 107, 82, 0.10)' : 'rgba(15, 107, 82, 0.05)');
      gradient.addColorStop(0.5, isDark ? 'rgba(15, 107, 82, 0.04)' : 'rgba(15, 107, 82, 0.02)');
      gradient.addColorStop(1, 'rgba(15, 107, 82, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const accentCenterX = canvas.width * 0.2;
      const accentCenterY = canvas.height * 0.7;
      const accentRadius = Math.min(canvas.width, canvas.height) * 0.25;

      const accentGrad = ctx.createRadialGradient(accentCenterX, accentCenterY, 0, accentCenterX, accentCenterY, accentRadius);
      accentGrad.addColorStop(0, isDark ? 'rgba(201, 162, 39, 0.07)' : 'rgba(201, 162, 39, 0.04)');
      accentGrad.addColorStop(1, 'rgba(201, 162, 39, 0)');

      ctx.fillStyle = accentGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      drawGrid();
      drawAccentShapes();
      gridOffset += 0.15;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 w-full h-full', className)}
      aria-hidden="true"
    />
  );
}
