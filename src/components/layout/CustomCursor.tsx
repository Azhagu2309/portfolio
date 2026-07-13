import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [isPointer, setIsPointer] = useState(false);
  const [clicked, setClicked] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 30, stiffness: 260, mass: 0.4 });
  const ringY = useSpring(y, { damping: 30, stiffness: 260, mass: 0.4 });

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touch);
    if (touch) return;

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setIsPointer(Boolean(target.closest("a, button, [data-cursor='link']")));
    }
    function handleDown() {
      setClicked(true);
    }
    function handleUp() {
      setClicked(false);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.documentElement.classList.add("cursor-none-desktop");

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, [x, y]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[200] h-2 w-2 rounded-full bg-cyan-300"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[200] rounded-full border border-cyan-300/50"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 52 : clicked ? 24 : 34,
          height: isPointer ? 52 : clicked ? 24 : 34,
          opacity: isPointer ? 0.9 : 0.5,
          backgroundColor: isPointer ? "rgba(0,229,255,0.08)" : "rgba(0,229,255,0)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
}
