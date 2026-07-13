import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-300"
      >
        Error 0x404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-4 font-display text-6xl font-bold text-gradient"
      >
        Signal Lost
      </motion.h1>
      <p className="mt-4 max-w-md text-slate-400">
        This route doesn&apos;t exist in the address space. Let&apos;s route you back home.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-[#050816]"
      >
        Back to Home
      </Link>
    </div>
  );
}
