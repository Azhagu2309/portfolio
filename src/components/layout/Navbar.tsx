import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "../../data/nav";
import { profile } from "../../data/profile";
import { scrollToHash } from "../../hooks/useLenis";
import { useActiveSection } from "../../hooks/useActiveSection";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNav(href: string) {
    setMenuOpen(false);
    scrollToHash(href);
  }

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <div
            className={`flex w-full items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
              scrolled ? "glass" : "border border-transparent"
            }`}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#home");
              }}
              data-cursor="link"
              className="flex items-center gap-2 font-display text-lg font-bold text-white"
            >
              <motion.span
                initial={{ rotate: -8 }}
                animate={{ rotate: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 font-mono text-sm text-cyan-300"
              >
                {profile.initials}
              </motion.span>
              <span className="hidden sm:inline">Azhagumurugan</span>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    data-cursor="link"
                    onClick={() => handleNav(link.href)}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/5"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={profile.resumeUrl}
                download
                data-cursor="link"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-semibold text-[#050816] transition-transform hover:scale-105"
              >
                <Download size={14} /> Resume
              </a>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              data-cursor="link"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onNavigate={handleNav} activeId={activeId} />}
      </AnimatePresence>
    </>
  );
}
