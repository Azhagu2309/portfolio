import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface Trace {
  points: { x: number; y: number }[];
  progress: number;
  speed: number;
  color: string;
}

interface Bit {
  x: number;
  y: number;
  speed: number;
  char: "0" | "1";
  opacity: number;
}

const ACCENT = "0, 229, 255";
const BLUE = "37, 99, 235";
const GREEN = "34, 197, 94";

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrame = 0;

    const traces: Trace[] = [];
    const bits: Bit[] = [];

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildScene();
    }

    function buildScene() {
      traces.length = 0;
      bits.length = 0;

      const cols = Math.max(4, Math.floor(width / 260));
      const rows = Math.max(3, Math.floor(height / 220));
      const colors = [ACCENT, BLUE, GREEN];

      for (let i = 0; i < cols; i++) {
        const startX = (i / cols) * width + Math.random() * 80;
        const startY = Math.random() * height;
        const segments = 3 + Math.floor(Math.random() * 3);
        const points = [{ x: startX, y: startY }];
        let cx = startX;
        let cy = startY;
        for (let s = 0; s < segments; s++) {
          const horizontal = Math.random() > 0.5;
          cx += horizontal ? (Math.random() - 0.5) * 260 : 0;
          cy += !horizontal ? (Math.random() - 0.5) * 200 : 0;
          points.push({ x: cx, y: cy });
        }
        traces.push({
          points,
          progress: Math.random(),
          speed: 0.0018 + Math.random() * 0.0022,
          color: colors[i % colors.length],
        });
      }

      const bitCount = Math.max(16, Math.floor((width * height) / 60000));
      for (let i = 0; i < bitCount; i++) {
        bits.push({
          x: Math.random() * width,
          y: Math.random() * height,
          speed: 0.15 + Math.random() * 0.35,
          char: Math.random() > 0.5 ? "1" : "0",
          opacity: 0.08 + Math.random() * 0.18,
        });
      }

      void rows;
    }

    function drawGrid() {
      const spacing = 64;
      ctx!.strokeStyle = "rgba(148, 163, 184, 0.045)";
      ctx!.lineWidth = 1;
      for (let x = 0; x < width; x += spacing) {
        ctx!.beginPath();
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, height);
        ctx!.stroke();
      }
      for (let y = 0; y < height; y += spacing) {
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(width, y);
        ctx!.stroke();
      }
    }

    function drawTraces() {
      for (const trace of traces) {
        ctx!.strokeStyle = `rgba(${trace.color}, 0.14)`;
        ctx!.lineWidth = 1.2;
        ctx!.beginPath();
        trace.points.forEach((p, idx) => {
          if (idx === 0) ctx!.moveTo(p.x, p.y);
          else ctx!.lineTo(p.x, p.y);
        });
        ctx!.stroke();

        for (const p of trace.points) {
          ctx!.fillStyle = `rgba(${trace.color}, 0.25)`;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
          ctx!.fill();
        }

        if (!reducedMotion) {
          trace.progress += trace.speed;
          if (trace.progress > 1) trace.progress = 0;
          const totalSegments = trace.points.length - 1;
          const segFloat = trace.progress * totalSegments;
          const segIndex = Math.min(Math.floor(segFloat), totalSegments - 1);
          const segT = segFloat - segIndex;
          const a = trace.points[segIndex];
          const b = trace.points[segIndex + 1];
          if (a && b) {
            const px = a.x + (b.x - a.x) * segT;
            const py = a.y + (b.y - a.y) * segT;
            const gradient = ctx!.createRadialGradient(px, py, 0, px, py, 8);
            gradient.addColorStop(0, `rgba(${trace.color}, 0.9)`);
            gradient.addColorStop(1, `rgba(${trace.color}, 0)`);
            ctx!.fillStyle = gradient;
            ctx!.beginPath();
            ctx!.arc(px, py, 8, 0, Math.PI * 2);
            ctx!.fill();
          }
        }
      }
    }

    function drawBits() {
      ctx!.font = "11px 'JetBrains Mono', monospace";
      for (const bit of bits) {
        ctx!.fillStyle = `rgba(0, 229, 255, ${bit.opacity})`;
        ctx!.fillText(bit.char, bit.x, bit.y);
        if (!reducedMotion) {
          bit.y -= bit.speed;
          if (bit.y < -20) {
            bit.y = height + 20;
            bit.x = Math.random() * width;
          }
        }
      }
    }

    function render() {
      ctx!.clearRect(0, 0, width, height);
      drawGrid();
      drawTraces();
      drawBits();
      animationFrame = requestAnimationFrame(render);
    }

    resize();
    window.addEventListener("resize", resize);
    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70"
    />
  );
}
