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

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const lines = codeLines.map((text, i) => ({
      text,
      x: Math.random() * width * 0.8,
      y: Math.random() * height * 0.8,
      opacity: Math.random(),
      speed: 0.003 + Math.random() * 0.007,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      lines.forEach((line) => {
        ctx.save();
        ctx.globalAlpha = Math.abs(Math.sin(Date.now() * line.speed * line.dir));
        ctx.font = '18px Fira Mono, monospace';
        ctx.fillStyle = '#2563eb';
        ctx.fillText(line.text, line.x, line.y);
        ctx.restore();
      });
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
