'use client';

import { Zap } from 'lucide-react';

const FOOTER_LINKS = [
  {
    title: 'Services',
    links: [
      { name: 'Omnichannel Visibility', href: '#services' },
      { name: 'Conversational Marketing', href: '#services' },
      { name: 'AI Agent Suite', href: '#services' },
      { name: 'Marketing Automation', href: '#services' },
      { name: 'AI Visibility (AEO)', href: '#services' },
      { name: 'SEO & Paid Media', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#founder' },
      { name: 'How It Works', href: '#approach' },
      { name: 'Why Us', href: '#differentiators' },
      { name: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { name: 'Healthcare & Wellness', href: '#' },
      { name: 'Coaching & Consulting', href: '#' },
      { name: 'Legal Services', href: '#' },
      { name: 'Real Estate', href: '#' },
      { name: 'Hospitality', href: '#' },
      { name: 'Home Services', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ap-dark border-t border-white/5">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Zap className="text-ap-teal-light" size={20} strokeWidth={2.5} />
              <span className="font-bold text-white text-lg tracking-tight">
                ActionPotential
                <span className="gradient-text">.AI</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Behavioral AI marketing and automation. From potential… to action.
            </p>
            <p className="mono-tag text-white/25 text-[10px]">
              Psychology × AI × Automation × Growth
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-white/80 font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/35 text-sm hover:text-ap-teal-light transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} ActionPotential.AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
