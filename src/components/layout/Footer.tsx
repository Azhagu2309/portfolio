import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { profile } from "../../data/profile";
import { navLinks } from "../../data/nav";
import { scrollToHash } from "../../hooks/useLenis";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <button
          onClick={() => scrollToHash("#home")}
          data-cursor="link"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 font-mono text-sm text-cyan-300"
        >
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {profile.initials}
          </motion.span>
        </button>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-slate-400">
          {navLinks.map((link) => (
            <button
              key={link.href}
              data-cursor="link"
              onClick={() => scrollToHash(link.href)}
              className="transition-colors hover:text-cyan-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" data-cursor="link" className="text-slate-400 transition-colors hover:text-cyan-300">
            <SiGithub size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" data-cursor="link" className="text-slate-400 transition-colors hover:text-cyan-300">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} data-cursor="link" className="text-slate-400 transition-colors hover:text-cyan-300">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-center font-mono text-[11px] text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Designed &amp; built from scratch.
        </p>
      </div>
    </footer>
  );
}
