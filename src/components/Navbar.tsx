"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, SunMedium, X, Zap } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./theme/ThemeProvider";

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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl border-b border-[var(--color-border)]" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "var(--color-navbar)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--teal-light)]/20 to-[var(--blue-deep)]/20 border border-[var(--teal-light)]/15 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-[var(--teal-light)]" />
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm tracking-tight text-[var(--color-text-strong)]">
                ActionPotential
              </span>
              <span className="text-[10px] text-[var(--teal-light)]/40 tracking-widest -mt-0.5">
                .AI
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm text-[var(--color-text)]/60 hover:text-[var(--color-text-strong)] transition-colors rounded-lg hover:bg-[var(--color-surface)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="theme-toggle-btn hidden sm:inline-flex"
            >
              <SunMedium className="theme-icon-light w-3.5 h-3.5" />
              <Moon className="theme-icon-dark w-3.5 h-3.5" />
            </button>
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white glow-button"
            >
              Book Free AI Audit
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 text-[var(--color-text)]/60 hover:bg-[var(--color-surface)] rounded-lg transition-colors"
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
                <SunMedium className="theme-icon-light w-3.5 h-3.5" />
                <Moon className="theme-icon-dark w-3.5 h-3.5" />
                <span className="theme-label-light">Dark mode</span>
                <span className="theme-label-dark">Light mode</span>
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-[var(--color-text)]/60 hover:text-[var(--color-text-strong)] hover:bg-[var(--color-surface)] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-full text-sm font-medium text-white text-center glow-button"
              >
                Book Free AI Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
