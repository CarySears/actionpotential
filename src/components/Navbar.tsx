"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useThemeTransition } from "./ThemeTransition";

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
  const { mode } = useThemeTransition();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = mode === "light";
  const navBg = isLight
    ? "bg-[#f4f8ff]/90 backdrop-blur-xl border-b border-[#1B75BB]/20"
    : scrolled
      ? "bg-[#0d1117]/90 backdrop-blur-xl border-b border-[#79C5C7]/10"
      : "bg-transparent";

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
              <span className={`text-[10px] sm:text-xs tracking-widest -mt-0.5 ${
                isLight ? "text-[#1B75BB]/70" : "text-[#79C5C7]/60"
              }`}>
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
                className={`px-4 py-2 text-sm transition-colors rounded-lg hover:bg-[#79C5C7]/5 ${
                  isLight ? "text-[#365678] hover:text-[#1B75BB]" : "text-[#e8f4f8]/70 hover:text-[#79C5C7]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white glow-button"
            >
              <Zap className="w-4 h-4" />
              Free AI Audit
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#79C5C7] hover:bg-[#79C5C7]/10 rounded-lg transition-colors"
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
            className={`md:hidden backdrop-blur-xl border-b ${
              isLight ? "bg-[#f4f8ff]/95 border-[#1B75BB]/20" : "bg-[#0d1117]/95 border-[#79C5C7]/10"
            }`}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-colors hover:bg-[#79C5C7]/5 ${
                    isLight ? "text-[#365678] hover:text-[#1B75BB]" : "text-[#e8f4f8]/80 hover:text-[#79C5C7]"
                  }`}
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
