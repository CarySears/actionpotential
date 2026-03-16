"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, SunMedium, X, Zap } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./theme/ThemeProvider";

const navLinks = [
  { label: "System", href: "#behavioral-engine" },
  { label: "Visibility", href: "#visibility-engine" },
  { label: "Method", href: "#why-us" },
  { label: "About", href: "#founder" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl border-b border-[var(--color-border)]" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "var(--color-navbar)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
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
              <span className="text-[10px] sm:text-xs text-[#79C5C7]/60 tracking-widest -mt-0.5">
                .AI
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#e8f4f8]/85 hover:text-[#79C5C7] transition-colors rounded-lg hover:bg-[#79C5C7]/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="theme-toggle-btn hidden sm:inline-flex"
            >
              <SunMedium className="theme-icon-light w-4 h-4" />
              <Moon className="theme-icon-dark w-4 h-4" />
            </button>
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white glow-button"
            >
              <Zap className="w-4 h-4" />
              Book Audit
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 text-[#79C5C7] hover:bg-[#79C5C7]/10 rounded-lg transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-xl border-b border-[var(--color-border)]"
            style={{ backgroundColor: "var(--color-navbar)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              <button
                onClick={toggleTheme}
                className="theme-toggle-btn mb-2 inline-flex w-full justify-center"
              >
                <SunMedium className="theme-icon-light w-4 h-4" />
                <Moon className="theme-icon-dark w-4 h-4" />
                <span className="theme-label-light">Dark mode</span>
                <span className="theme-label-dark">Light mode</span>
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-[#e8f4f8]/80 hover:text-[#79C5C7] hover:bg-[#79C5C7]/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-full text-sm font-semibold text-white text-center glow-button"
              >
                Book Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
