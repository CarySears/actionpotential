"use client";

import { motion } from "framer-motion";
import { Zap, Mail, Phone } from "lucide-react";

const links = {
  Services: [
    { label: "Omnichannel Visibility", href: "#services" },
    { label: "Conversational Marketing", href: "#services" },
    { label: "AI Agent Suite", href: "#services" },
    { label: "Marketing Automation", href: "#services" },
    { label: "AI Visibility Services", href: "#services" },
    { label: "SEO & Paid Media", href: "#services" },
  ],
  Company: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Us", href: "#why-us" },
    { label: "Who We Serve", href: "#who-we-serve" },
    { label: "About Cary", href: "#founder" },
  ],
  "Get Started": [
    { label: "Free AI Audit", href: "#cta" },
    { label: "Strategy Session", href: "#cta" },
    { label: "Contact Us", href: "mailto:hello@actionpotential.ai" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[#79C5C7]/8 pt-16 pb-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117]/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#79C5C7] to-[#1B75BB] flex items-center justify-center node-pulse">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <div>
                <span className="font-bold gradient-text text-sm">ActionPotential</span>
                <span className="text-[#79C5C7]/60 text-sm">.AI</span>
              </div>
            </div>
            <p className="text-sm text-[#e8f4f8]/40 leading-relaxed mb-5">
              Behavioral AI marketing and automation agency. We sit at the intersection of AI,
              behavioral science, UX, and growth marketing.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@actionpotential.ai"
                className="flex items-center gap-2 text-xs text-[#e8f4f8]/35 hover:text-[#79C5C7] transition-colors"
              >
                <Mail className="w-3 h-3" />
                hello@actionpotential.ai
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-[#e8f4f8]/40 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-[#e8f4f8]/50 hover:text-[#79C5C7] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#e8f4f8]/25">
            © {new Date().getFullYear()} ActionPotential.AI — All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-[#e8f4f8]/25 hover:text-[#79C5C7] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#e8f4f8]/25 hover:text-[#79C5C7] transition-colors">
              Terms of Service
            </a>
          </div>
          <p className="text-xs text-[#e8f4f8]/20 italic">From potential... to action.</p>
        </div>
      </div>
    </footer>
  );
}
