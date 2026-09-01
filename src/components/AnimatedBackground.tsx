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

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 60;
      const lineWidth = 1;
      const opacity = 0.03;

      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
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

    const drawGlow = () => {
      if (!ctx || !canvas) return;
      const centerX = canvas.width * 0.7;
      const centerY = canvas.height * 0.3;
      const radius = Math.min(canvas.width, canvas.height) * 0.4;

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.03)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      drawGrid();
      drawGlow();
      gridOffset += 0.1;
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
