import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

export type HeroCanvasHandle = {
  startSequence: () => void;
  setScrollProgress: (p: number) => void;
};

export const HeroCanvas = forwardRef<HeroCanvasHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useImperativeHandle(ref, () => ({
    startSequence: () => {},
    setScrollProgress: () => {},
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 3;
    let targetX = mouseX;
    let targetY = mouseY;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let t = 0;
    const render = () => {
      t += 0.01;
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Subtle atmospheric glow 1: follow mouse / center
      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY + Math.sin(t) * 15,
        10,
        mouseX,
        mouseY,
        width * 0.45
      );
      gradient.addColorStop(0, 'rgba(0, 229, 255, 0.06)');
      gradient.addColorStop(0.5, 'rgba(100, 120, 255, 0.025)');
      gradient.addColorStop(1, 'rgba(7, 7, 9, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Subtle atmospheric secondary glow
      const grad2 = ctx.createRadialGradient(
        width * 0.5 + Math.cos(t * 0.7) * 60,
        height * 0.35 + Math.sin(t * 0.8) * 40,
        20,
        width * 0.5,
        height * 0.35,
        width * 0.35
      );
      grad2.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
      grad2.addColorStop(1, 'rgba(7, 7, 9, 0)');

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
});
