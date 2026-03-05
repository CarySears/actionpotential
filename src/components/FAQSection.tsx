'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const FAQS = [
  {
    q: 'What is a behavioral AI marketing agency?',
    a: 'A behavioral AI marketing agency combines artificial intelligence, marketing automation, behavioral science, and user experience design to build systems that acquire customers and convert leads automatically. Unlike traditional agencies that focus on one channel, we build full-funnel systems that guide prospects from first impression to loyal advocate.',
  },
  {
    q: 'How is ActionPotential.AI different from a regular marketing agency?',
    a: 'Most agencies hand you leads and disappear. We build the entire system — from attracting the right traffic, to engaging visitors in real-time conversations, to converting and retaining customers automatically. Our systems are grounded in behavioral science and powered by AI, so they get smarter over time.',
  },
  {
    q: 'What is an AI Audit & Marketing Strategy Session?',
    a: 'It\'s a free consultation where we audit your current marketing systems, map your customer journey, identify gaps in your funnel, and show you exactly where AI and automation can drive more leads, conversions, and revenue. There\'s no commitment required.',
  },
  {
    q: 'What types of businesses do you work with?',
    a: 'We primarily serve small and midsize service businesses, including healthcare and wellness practices, coaching and consulting firms, legal and professional services, real estate, hospitality, and home services. If you\'re ready to grow but don\'t have time to build marketing systems from scratch, we\'re a great fit.',
  },
  {
    q: 'What is AEO (Ask Engine Optimization)?',
    a: 'AEO stands for Ask Engine Optimization — optimizing your content to appear in AI-generated answers from tools like ChatGPT, Perplexity, Gemini, and Claude. As more people use AI to research purchasing decisions, being visible in these answers is becoming essential for businesses.',
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'No. We don\'t lock clients into long-term contracts. We earn continued trust through results. If we\'re not delivering, you have the freedom to walk away. We\'re confident you won\'t want to.',
  },
  {
    q: 'How quickly can I expect to see results?',
    a: 'Our structured two-phase process is designed to produce results as quickly as possible. Phase 1 (Foundation) takes 1-2 weeks. Phase 2 (Activation & Growth) begins immediately after. Most clients start seeing meaningful improvement in lead response times, booking rates, and engagement within the first month.',
  },
  {
    q: 'What is speed-to-lead optimization?',
    a: 'Speed-to-lead refers to how quickly you respond to new inquiries. Research shows that responding within 5 minutes makes you 100x more likely to convert a lead compared to waiting 30 minutes. Our automation systems ensure every inquiry gets an immediate, intelligent response.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-ap-warm-white relative overflow-hidden">
      <div className="container-narrow max-w-3xl">
        <AnimatedSection className="text-center mb-14">
          <span className="mono-tag text-ap-teal mb-4 block">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ap-dark mb-4 leading-tight">
            Questions?{' '}
            <span className="gradient-text">Answers.</span>
          </h2>
          <p className="text-ap-dark/50 leading-relaxed">
            Everything you need to know about working with ActionPotential.AI.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-3">
          {FAQS.map((faq, i) => (
            <StaggerItem key={i}>
              <div className="rounded-xl border border-ap-teal-light/10 bg-white overflow-hidden transition-colors hover:border-ap-teal-light/20">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start gap-3 p-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="mono-tag text-ap-teal/50 text-[10px] mt-1 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium text-ap-dark/85 flex-1 text-[15px] leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-ap-dark/25 mt-0.5 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-12">
                        <p className="text-sm text-ap-dark/55 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
