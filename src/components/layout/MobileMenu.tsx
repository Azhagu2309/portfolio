import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { navLinks } from "../../data/nav";
import { profile } from "../../data/profile";

interface Props {
  onNavigate: (href: string) => void;
  activeId: string;
}

export default function MobileMenu({ onNavigate, activeId }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-[#050816]/97 backdrop-blur-xl lg:hidden"
    >
      <div className="flex h-full flex-col items-center justify-center gap-2 px-6">
        {navLinks.map((link, i) => (
          <motion.button
            key={link.href}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            onClick={() => onNavigate(link.href)}
            className={`py-3 text-3xl font-display font-semibold transition-colors ${
              activeId === link.href.replace("#", "") ? "text-cyan-300" : "text-white/80"
            }`}
          >
            {link.label}
          </motion.button>
        ))}

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * navLinks.length }}
          href={profile.resumeUrl}
          download
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-[#050816]"
        >
          <Download size={16} /> Download Resume
        </motion.a>

        <div className="mt-8 flex items-center gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-300">
            <SiGithub size={22} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-300">
            <FaLinkedin size={22} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-cyan-300">
            <Mail size={22} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
