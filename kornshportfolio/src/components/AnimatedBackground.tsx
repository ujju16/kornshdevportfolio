"use client";

// Composant AnimatedBackground : fond abstrait animé avec lignes de code qui apparaissent/disparaissent
import React, { useEffect, useRef } from 'react';

const codeLines = [
  'const hello = "world";',
  'function sum(a, b) { return a + b; }',
  'let android = true;',
  'if (kotlin && java) { androidDev(); }',
  'const skills = ["React", "Python", "Elixir"]',
  'console.log("Portfolio!");',
];

type AnimatedLine = {
  text: string;
  opacity: number;
  speed: number;
  angle: number;
  radius: number;
  centerX: number;
  centerY: number;
  fontSize: number;
};

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [lines, setLines] = React.useState<AnimatedLine[]>([]);

  useEffect(() => {
    function generateLines() {
      return Array.from({ length: 12 }, () => ({
        text: codeLines[Math.floor(Math.random() * codeLines.length)],
        opacity: 0.5 + Math.random() * 0.5,
        speed: 0.2 + Math.random() * 0.4,
        angle: Math.random() * Math.PI * 2,
        radius: 60 + Math.random() * (Math.min(window.innerWidth, window.innerHeight) / 2 - 60),
        centerX: Math.random() * window.innerWidth,
        centerY: Math.random() * window.innerHeight,
        fontSize: 16 + Math.random() * 10,
      }));
    }
    setLines(generateLines());
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Met à jour les centres et rayons sur resize
    function updateLines() {
      setLines((prev) =>
        prev.map((line) => ({
          ...line,
          centerX: Math.random() * window.innerWidth,
          centerY: Math.random() * window.innerHeight,
          radius: 60 + Math.random() * (Math.min(window.innerWidth, window.innerHeight) / 2 - 60),
        }))
      );
    }
    window.addEventListener('resize', updateLines);

    // Détection dynamique du thème (dark/light)
    function getColor() {
      if (document.documentElement.classList.contains('dark')) return '#38bdf8';
      return '#2563eb';
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = getColor();
      const now = Date.now() / 1000;
      lines.forEach((line, i) => {
        const angle = line.angle + now * line.speed * (i % 2 === 0 ? 1 : -1);
        const x = line.centerX + Math.cos(angle) * line.radius;
        const y = line.centerY + Math.sin(angle) * line.radius;
        ctx.save();
        ctx.globalAlpha = line.opacity;
        ctx.font = `${line.fontSize}px Fira Mono, monospace`;
        ctx.fillStyle = color;
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillText(line.text, 0, 0);
        ctx.restore();
      });
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    // Écoute le changement de thème
    const observer = new MutationObserver(() => {
      animate();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', updateLines);
    };
  }, [lines]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
