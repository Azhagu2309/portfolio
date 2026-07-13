import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
}

const variantStyles: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-cyan-400 to-blue-500 text-[#050816] shadow-[0_0_30px_-6px_rgba(0,229,255,0.6)] hover:shadow-[0_0_45px_-6px_rgba(0,229,255,0.85)]",
  secondary:
    "glass text-white border border-cyan-400/30 hover:border-cyan-300/60",
  ghost: "text-cyan-300 hover:text-white",
};

export default function MagneticButton({
  children,
  as = "button",
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  rel,
  type = "button",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    className: `group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 ${variantStyles[variant]} ${className}`,
  };

  const content = (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 12, mass: 0.4 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (as === "a" && href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        {...sharedProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      {...sharedProps}
    >
      {content}
    </motion.button>
  );
}
