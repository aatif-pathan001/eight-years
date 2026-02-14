
import React, { useEffect, useRef } from 'react';

const HeartBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let hearts: Heart[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Heart {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      oscillation: number;
      oscillationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.size = Math.random() * 15 + 5;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.oscillation = 0;
        this.oscillationSpeed = Math.random() * 0.02;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ffc2dc';
        ctx.translate(this.x + Math.sin(this.oscillation) * 20, this.y);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, this.size / 3, 0, this.size);
        ctx.bezierCurveTo(this.size, this.size / 3, this.size / 2, -this.size / 2, 0, 0);
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.y -= this.speed;
        this.oscillation += this.oscillationSpeed;
        if (this.y < -100) {
          this.y = canvas.height + 100;
          this.x = Math.random() * canvas.width;
        }
      }
    }

    const init = () => {
      hearts = Array.from({ length: 40 }, () => new Heart());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach(heart => {
        heart.update();
        heart.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default HeartBackground;
