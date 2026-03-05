'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import NeuralNetworkCanvas from './NeuralNetworkCanvas';
import AnimatedSection from './AnimatedSection';

export default function CTASection() {
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden bg-ap-dark">
      <NeuralNetworkCanvas
        className="z-0"
        nodeCount={50}
        connectionDistance={160}
        opacity={0.5}
        dark={true}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-ap-dark/40 via-transparent to-ap-dark/60 z-[1]" />

      <div className="container-narrow relative z-10 text-center">
        <AnimatedSection>
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-ap-teal to-ap-blue mb-8"
          >
            <Zap className="text-white" size={28} />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your
            <br />
            <span className="gradient-text">Growth Engine?</span>
          </h2>

          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Schedule your free AI Audit & Marketing Strategy Session.
            We&apos;ll map your customer journey, identify gaps, and show you
            exactly where AI can drive results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://actionpotential.ai/booking"
              className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-ap-teal to-ap-blue text-white font-semibold text-lg hover:shadow-2xl hover:shadow-ap-teal/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2.5">
                Schedule Free AI Audit
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-ap-teal" />
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-ap-blue" />
              No long-term contracts
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-ap-teal-light" />
              Results-driven partnership
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
