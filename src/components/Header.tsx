'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#approach' },
  { label: 'Why Us', href: '#differentiators' },
  { label: 'Founder', href: '#founder' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-ap-teal-light/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2.5 group" aria-label="ActionPotential.AI Home">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Zap
              className={`w-5 h-5 transition-colors duration-500 ${
                scrolled ? 'text-ap-teal' : 'text-ap-teal-light'
              }`}
              strokeWidth={2.5}
            />
            <div className="absolute inset-0 rounded-full bg-ap-teal/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
          </div>
          <span
            className={`font-bold text-lg tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-ap-dark' : 'text-white'
            }`}
          >
            ActionPotential
            <span className="gradient-text">.AI</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? 'text-ap-dark/70 hover:text-ap-dark hover:bg-ap-teal-light/10'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="#cta"
            className="ml-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-ap-teal to-ap-blue text-white text-sm font-semibold hover:shadow-lg hover:shadow-ap-teal/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Free AI Audit
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className={scrolled ? 'text-ap-dark' : 'text-white'} size={24} />
          ) : (
            <Menu className={scrolled ? 'text-ap-dark' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-ap-teal-light/10 overflow-hidden"
          >
            <nav className="container-narrow py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-3 rounded-lg text-ap-dark/80 hover:text-ap-dark hover:bg-ap-teal-light/10 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-ap-teal to-ap-blue text-white text-center font-semibold"
              >
                Free AI Audit
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
