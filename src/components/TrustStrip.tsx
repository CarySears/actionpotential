'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, Brain, Shield } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: GraduationCap, text: 'Ivy League–Level Expertise' },
  { icon: Building2, text: 'Cleveland Clinic Trained' },
  { icon: Brain, text: 'Behavioral Science Foundation' },
  { icon: Shield, text: 'No Long-Term Contracts' },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-white border-b border-ap-teal-light/10">
      <div className="container-narrow py-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-ap-dark/40"
            >
              <item.icon size={15} strokeWidth={1.8} className="text-ap-teal/60" />
              <span className="text-xs font-medium tracking-wide">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
