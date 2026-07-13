import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "../../types";
import { useTilt } from "../../hooks/useTilt";
import Chip from "../ui/Chip";

interface Props {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

const GRADIENTS = [
  "from-cyan-500/20 via-blue-600/10 to-transparent",
  "from-emerald-500/20 via-cyan-600/10 to-transparent",
  "from-blue-500/20 via-indigo-600/10 to-transparent",
  "from-cyan-400/20 via-emerald-500/10 to-transparent",
  "from-indigo-500/20 via-blue-600/10 to-transparent",
];

export default function ProjectCard({ project, index, onOpen }: Props) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ transition: "transform 0.35s ease" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
      >
        <div
          className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]}`}
        >
          <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 200 100">
            <path d="M0 50 H60 L75 30 H140 L155 50 H200" stroke="#00E5FF" strokeWidth="1" fill="none" />
            <path d="M0 70 H40 L55 85 H200" stroke="#22C55E" strokeWidth="1" fill="none" />
            <circle cx="60" cy="50" r="2" fill="#00E5FF" />
            <circle cx="140" cy="50" r="2" fill="#00E5FF" />
          </svg>
          <span className="relative font-display text-3xl font-bold text-white/15">
            0{index + 1}
          </span>
          {project.featured && (
            <span className="absolute right-3 top-3 rounded-full border border-cyan-400/40 bg-[#050816]/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-300">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-cyan-300/90">{project.tagline}</p>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((t) => (
              <Chip key={t} className="text-[10px]">
                {t}
              </Chip>
            ))}
            {project.technologies.length > 4 && (
              <Chip className="text-[10px]">+{project.technologies.length - 4}</Chip>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
            <button
              onClick={() => onOpen(project)}
              data-cursor="link"
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-cyan-300 transition-colors hover:text-white"
            >
              Read More <ArrowUpRight size={13} />
            </button>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                aria-label={`${project.title} on GitHub`}
                className="text-slate-400 transition-colors hover:text-cyan-300"
              >
                <SiGithub size={16} />
              </a>
            )}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[inset_0_0_0_1px_rgba(0,229,255,0.35)]" />
      </div>
    </motion.div>
  );
}
