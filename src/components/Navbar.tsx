"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "About", href: "#founder" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? isLight
      ? "bg-white/90 backdrop-blur-xl border-b border-[#1B75BB]/12 shadow-sm"
      : "bg-[#0d1117]/90 backdrop-blur-xl border-b border-[#79C5C7]/10"
    : "bg-transparent";

  const linkClass = isLight
    ? "text-[#1a1f2e]/65 hover:text-[#1B75BB]"
    : "text-[#e8f4f8]/70 hover:text-[#79C5C7]";

  const mobileBg = isLight
    ? "bg-white/96 backdrop-blur-xl border-b border-[#1B75BB]/12"
    : "bg-[#0d1117]/95 backdrop-blur-xl border-b border-[#79C5C7]/10";

  const mobileLinkClass = isLight
    ? "text-[#1a1f2e]/80 hover:text-[#1B75BB] hover:bg-[#1B75BB]/5"
    : "text-[#e8f4f8]/80 hover:text-[#79C5C7] hover:bg-[#79C5C7]/5";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#79C5C7] to-[#1B75BB] flex items-center justify-center node-pulse">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#79C5C7] to-[#1B75BB] opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-sm sm:text-base tracking-tight gradient-text">
                ActionPotential
              </span>
              <span
                className={`text-[10px] sm:text-xs tracking-widest -mt-0.5 ${
                  isLight ? "text-[#1B75BB]/50" : "text-[#79C5C7]/60"
                }`}
              >
                .AI
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm transition-colors rounded-lg ${linkClass} hover:bg-[#79C5C7]/5`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Theme Toggle + Mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white glow-button"
            >
              <Zap className="w-4 h-4" />
              Free AI Audit
            </a>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              disabled={isTransitioning}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
              className={`
                relative w-9 h-9 rounded-full flex items-center justify-center
                transition-all duration-300 overflow-hidden
                ${isLight
                  ? "bg-[#1B75BB]/10 border border-[#1B75BB]/20 text-[#1B75BB] hover:bg-[#1B75BB]/18"
                  : "bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] hover:bg-[#79C5C7]/18"
                }
                ${isTransitioning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
              `}
            >
              <AnimatePresence mode="wait">
                {isLight ? (
                  <motion.span
                    key="moon"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.22 }}
                    className="flex items-center justify-center"
                  >
                    <Moon className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.22 }}
                    className="flex items-center justify-center"
                  >
                    <Sun className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Brand wave ring on hover */}
              <span
                className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "conic-gradient(from 0deg, #ff8b66, #d93aa4, #1B75BB, #00A79D, #ff8b66)",
                  padding: "1px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
            </motion.button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isLight
                  ? "text-[#1B75BB] hover:bg-[#1B75BB]/10"
                  : "text-[#79C5C7] hover:bg-[#79C5C7]/10"
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${mobileBg}`}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-colors ${mobileLinkClass}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-full text-sm font-semibold text-white text-center glow-button"
              >
                Free AI Audit & Strategy Session
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
