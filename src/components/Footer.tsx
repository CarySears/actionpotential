"use client";

import { Zap, Mail } from "lucide-react";

const links = {
  Services: [
    { label: "Omnichannel Visibility", href: "#services" },
    { label: "Conversational Marketing", href: "#services" },
    { label: "AI Agent Suite", href: "#services" },
    { label: "Marketing Automation", href: "#services" },
    { label: "AI Discoverability Services", href: "#services" },
    { label: "SEO & Paid Media", href: "#services" },
  ],
  Company: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Us", href: "#why-us" },
    { label: "Who We Serve", href: "#who-we-serve" },
    { label: "About Cary", href: "#founder" },
  ],
  "Get Started": [
    { label: "Book Free AI Audit", href: "#cta" },
    { label: "Watch Client Results", href: "/results/index.html" },
    { label: "Contact Us", href: "mailto:hello@actionpotential.ai" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--teal-light)]/15 to-[var(--blue-deep)]/15 border border-[var(--teal-light)]/12 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-[var(--teal-light)]" />
              </div>
              <div>
                <span className="font-semibold text-sm text-[var(--color-text-strong)]">ActionPotential</span>
                <span className="text-[var(--teal-light)]/40 text-sm">.AI</span>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text)]/40 leading-relaxed mb-5">
              Behavioral AI marketing and automation agency. We sit at the intersection of AI,
              behavioral science, UX, and growth marketing.
            </p>
            <a
              href="mailto:hello@actionpotential.ai"
              className="flex items-center gap-2 text-xs text-[var(--color-text)]/40 hover:text-[var(--teal-light)]/60 transition-colors"
            >
              <Mail className="w-3 h-3" />
              hello@actionpotential.ai
            </a>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-medium text-[var(--color-text)]/35 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-[var(--color-text)]/50 hover:text-[var(--color-text-strong)] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text)]/20">
            &copy; {new Date().getFullYear()} ActionPotential.AI — All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy/" className="text-xs text-[var(--color-text)]/30 hover:text-[var(--color-text)]/60 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms/" className="text-xs text-[var(--color-text)]/30 hover:text-[var(--color-text)]/60 transition-colors">
              Terms of Service
            </a>
          </div>
          <p className="text-xs text-[var(--color-text)]/15 italic">From potential... to action.</p>
        </div>
      </div>
    </footer>
  );
}
