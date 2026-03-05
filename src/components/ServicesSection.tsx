'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MessageCircle,
  Bot,
  Cog,
  Eye,
  Megaphone,
  ChevronDown,
  Check,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const SERVICES = [
  {
    icon: Search,
    title: 'Omnichannel Visibility',
    tagline: 'Be found everywhere your customers are looking',
    color: '#79C5C7',
    items: [
      'SEO — traditional search engine optimization',
      'AEO (Ask Engine Optimization) — appear in AI-generated answers',
      'AI-Engine Optimization — visibility inside AI recommendation systems',
      'Google Ads — capture high-intent search traffic',
      'Meta Ads — demand generation across Facebook, Instagram, and WhatsApp',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Conversational Marketing',
    tagline: 'Real conversations, every channel, 24/7',
    color: '#2EA6D4',
    items: [
      'Website chat — instant engagement on your site',
      'SMS messaging — direct mobile conversations',
      'Facebook Messenger — social engagement',
      'Instagram DMs — visual platform outreach',
      'WhatsApp — global messaging coverage',
      'Voice calls — AI-powered phone communication',
    ],
  },
  {
    icon: Bot,
    title: 'AI Agent Suite',
    tagline: 'Autonomous agents handling key business functions',
    color: '#00A79D',
    items: [
      'Lead qualification agents — instantly score and route inquiries',
      'Appointment booking agents — schedule without human intervention',
      'Follow-up agents — persistent, intelligent re-engagement',
      'Review solicitation agents — automated reputation building',
      'Reactivation agents — re-engage dormant contacts',
      'Customer support agents — 24/7 assistance in your brand voice',
    ],
  },
  {
    icon: Cog,
    title: 'Marketing Automation',
    tagline: 'No lead slips through the cracks, ever',
    color: '#1B75BB',
    items: [
      'Speed-to-Lead Optimization — respond within minutes, not days',
      'Lead Nurture Sequences — automated text, email, and voice follow-up',
      'Appointment Automation — calendar integrations that reduce no-shows',
      'Reputation Management — automated review generation and monitoring',
    ],
  },
  {
    icon: Eye,
    title: 'AI Visibility Services',
    tagline: 'Be visible in the AI-driven future of search',
    color: '#5BB8CC',
    items: [
      'LLM Visibility Monitoring — track mentions in ChatGPT, Gemini, Claude, Perplexity',
      'AI Authority Building — cultivate sources that inform AI answers',
      'AI Crawler Optimization — prepare for GPTBot, ClaudeBot, and others',
      'AI Content Optimization — content formatted for AI-generated responses',
    ],
  },
  {
    icon: Megaphone,
    title: 'SEO & Paid Media',
    tagline: 'Qualified traffic at scale, technical + creative',
    color: '#1B9BC8',
    items: [
      'Google Business Profile optimization',
      'Schema markup and structured data',
      'Topical authority content and internal linking',
      'High-authority backlink and citation building',
      'Google Ads for high-intent traffic',
      'Meta Ads for awareness and demand generation',
      'Retargeting campaigns for unconverted visitors',
    ],
  },
];

function ServiceCard({
  service,
  isOpen,
  onToggle,
}: {
  service: (typeof SERVICES)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <div
          className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${service.color}15` }}
        >
          <service.icon
            style={{ color: service.color }}
            size={20}
            strokeWidth={1.8}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-ap-dark">{service.title}</h3>
          <p className="text-sm text-ap-dark/50 mt-0.5">{service.tagline}</p>
        </div>
        <ChevronDown
          size={20}
          className={`shrink-0 text-ap-dark/30 transition-transform duration-300 mt-1 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 ml-[3.75rem]">
              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ap-dark/65">
                    <Check
                      size={14}
                      className="shrink-0 mt-0.5"
                      style={{ color: service.color }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="section-padding bg-ap-warm-gray relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-14">
          <span className="mono-tag text-ap-teal mb-4 block">How We Do It</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ap-dark mb-6 leading-tight">
            Six Engines of
            <br />
            <span className="gradient-text">Intelligent Growth</span>
          </h2>
          <p className="text-lg text-ap-dark/60 max-w-2xl mx-auto leading-relaxed">
            Your business becomes an interactive customer communication hub —
            available 24/7, in your brand&apos;s voice, across every channel.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-4">
          {SERVICES.map((service, i) => (
            <StaggerItem key={service.title}>
              <ServiceCard
                service={service}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
