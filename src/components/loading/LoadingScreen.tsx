import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MESSAGES = [
  "Initializing Embedded Systems...",
  "Loading FPGA Modules...",
  "Connecting AI Engine...",
  "Preparing Portfolio...",
];

interface Props {
  onFinished: () => void;
}

export default function LoadingScreen({ onFinished }: Props) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2200;
    let frame = 0;

    function tick(now: number) {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      setMessageIndex(Math.min(MESSAGES.length - 1, Math.floor((pct / 100) * MESSAGES.length)));

      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onFinished, 650);
      return () => clearTimeout(t);
    }
  }, [done, onFinished]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816]"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center gap-8 px-6">
            <div className="relative h-28 w-28">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <rect
                  x="30"
                  y="30"
                  width="40"
                  height="40"
                  rx="6"
                  fill="#0F172A"
                  stroke="#00E5FF"
                  strokeWidth="1.5"
                />
                {[18, 28, 38, 48, 58, 68].map((pos, i) => (
                  <g key={`pins-${pos}`}>
                    <motion.line
                      x1={pos > 45 ? 30 : pos}
                      y1={pos > 45 ? pos - 12 : 24}
                      x2={pos > 45 ? 22 : pos}
                      y2={pos > 45 ? pos - 12 : 16}
                      stroke="#00E5FF"
                      strokeWidth="1.5"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.12 }}
                    />
                  </g>
                ))}
                {[18, 30, 42, 54, 66, 78].map((y, i) => (
                  <motion.line
                    key={`left-${y}`}
                    x1={12}
                    y1={y}
                    x2={30}
                    y2={y}
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    animate={{ opacity: [0.15, 0.9, 0.15] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
                {[18, 30, 42, 54, 66, 78].map((y, i) => (
                  <motion.line
                    key={`right-${y}`}
                    x1={70}
                    y1={y}
                    x2={88}
                    y2={y}
                    stroke="#22C55E"
                    strokeWidth="1.5"
                    animate={{ opacity: [0.15, 0.9, 0.15] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: 0.3 + i * 0.15 }}
                  />
                ))}
                <motion.rect
                  x="30"
                  y="30"
                  width="40"
                  height="40"
                  rx="6"
                  fill="none"
                  stroke="#00E5FF"
                  strokeWidth="1"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <text
                  x="50"
                  y="54"
                  textAnchor="middle"
                  fontSize="12"
                  fontFamily="'JetBrains Mono', monospace"
                  fill="#00E5FF"
                >
                  AR
                </text>
              </svg>
            </div>

            <div className="w-64 sm:w-80">
              <div className="mb-3 flex items-center justify-between font-mono text-xs text-cyan-300/80">
                <span>SYSTEM BOOT</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-4 text-center font-mono text-[11px] tracking-wide text-slate-400">
                {MESSAGES[messageIndex]}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
