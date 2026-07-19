import { motion } from "framer-motion";
import { Download, Mail, ArrowDown, GraduationCap } from "lucide-react";
import { SiGithub, SiLeetcode, SiHackerrank } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { profile, education } from "../data/profile";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { scrollToHash } from "../hooks/useLenis";
import { useGsapParallax } from "../hooks/useGsapReveal";
import MagneticButton from "../components/ui/MagneticButton";
import OscilloscopeWave from "../components/background/OscilloscopeWave";
import NeuralNetworkMesh from "../components/background/NeuralNetworkMesh";

export default function Hero() {
  const typed = useTypingEffect(profile.taglines);
  const blobRef = useGsapParallax<HTMLDivElement>(0.25);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div
        ref={blobRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl"
      />

      <NeuralNetworkMesh className="absolute inset-0 hidden h-full w-full opacity-40 lg:block" />
      <OscilloscopeWave className="absolute bottom-16 left-1/2 hidden h-16 w-72 -translate-x-1/2 opacity-70 sm:block" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-300"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 break-words font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 space-y-1"
          >
            <p className="text-lg font-medium text-slate-200 sm:text-xl">{profile.role}</p>
            <p className="text-sm text-slate-400 sm:text-base">{profile.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-4 flex flex-wrap items-center gap-2.5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-400/10 px-3 py-1 font-mono text-xs text-green-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1 font-mono text-xs text-cyan-300">
              <GraduationCap size={13} />
              {education[0].institution}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex h-8 items-center font-mono text-base text-cyan-300 sm:text-lg"
          >
            <span className="text-slate-500">&gt;&nbsp;</span>
            {typed}
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan-300" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton as="a" href={profile.resumeUrl} variant="primary" className="text-[#050816]">
              <Download size={16} /> Download Resume
            </MagneticButton>
            <MagneticButton onClick={() => scrollToHash("#projects")} variant="secondary">
              View Projects
            </MagneticButton>
            <MagneticButton onClick={() => scrollToHash("#contact")} variant="ghost">
              Hire Me →
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <SiGithub size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <FaLinkedin size={17} />
            </a>
            {profile.leetcode && (
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                aria-label="LeetCode"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all hover:border-cyan-400/50 hover:text-cyan-300"
              >
                <SiLeetcode size={16} />
              </a>
            )}
            {profile.hackerrank && (
              <a
                href={profile.hackerrank}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                aria-label="HackerRank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all hover:border-cyan-400/50 hover:text-cyan-300"
              >
                <SiHackerrank size={16} />
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              data-cursor="link"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <Mail size={17} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <motion.div
            className="absolute -inset-2 rounded-full opacity-70 blur-md"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(0,229,255,0.55), rgba(37,99,235,0.4), rgba(34,197,94,0.45), rgba(0,229,255,0.55))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-cyan-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-6 rounded-full border border-dashed border-blue-500/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-10 animate-pulse-glow rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-2xl" />

          <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-[#0f172a] to-[#050816] shadow-[0_0_60px_-10px_rgba(0,229,255,0.5)] sm:h-56 sm:w-56">
            <span className="font-display text-6xl font-bold text-gradient sm:text-7xl">
              {profile.initials}
            </span>
          </div>

          {["FPGA", "AI", "RTL", "C++"].map((tag, i) => (
            <motion.span
              key={tag}
              className="absolute rounded-full border border-white/10 bg-[#0f172a]/90 px-3 py-1 font-mono text-[10px] text-cyan-300 shadow-lg"
              style={{
                top: `${[8, 20, 78, 88][i]}%`,
                left: `${[10, 85, 88, 8][i]}%`,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToHash("#about")}
        data-cursor="link"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-400"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}
