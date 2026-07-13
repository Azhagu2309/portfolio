import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Clock } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "../../types";
import Chip from "../ui/Chip";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-[#050816]/85 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-cyan-400/20 p-8"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          data-cursor="link"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:text-white"
        >
          <X size={16} />
        </button>

        <p className="font-mono text-xs uppercase tracking-wider text-cyan-300">{project.tagline}</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>

        <p className="mt-4 flex items-center gap-2 font-mono text-xs text-slate-400">
          <Clock size={13} className="text-cyan-300" /> {project.timeline}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-slate-300">{project.description}</p>

        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">Key Features</h4>
          <ul className="mt-3 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">Challenges Solved</h4>
          <ul className="mt-3 space-y-2">
            {project.challenges.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">Technologies</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <SiGithub size={14} /> View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-semibold text-[#050816]"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
