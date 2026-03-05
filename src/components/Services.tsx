"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Globe,
  MessageSquare,
  Bot,
  Workflow,
  Search,
  ChevronDown,
  ChevronUp,
  Radio,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Omnichannel Visibility",
    tagline: "Be found everywhere your customers are looking",
    color: "#79C5C7",
    items: [
      { name: "SEO", desc: "Traditional search engine optimization for long-term organic traffic" },
      { name: "AEO — Ask Engine Optimization", desc: "Optimize content to appear in AI-generated answers from ChatGPT, Perplexity, and Gemini" },
      { name: "AI-Engine Optimization", desc: "Ensure visibility inside AI recommendation systems" },
      { name: "Google Ads", desc: "Capture high-intent search traffic ready to buy" },
      { name: "Meta Ads", desc: "Generate demand across Facebook, Instagram, and WhatsApp" },
    ],
  },
  {
    icon: MessageSquare,
    title: "Conversational Marketing",
    tagline: "Meet customers where they are, in real time",
    color: "#2EA6D4",
    items: [
      { name: "Website Chat", desc: "Convert visitors before they bounce" },
      { name: "SMS Messaging", desc: "The highest open-rate channel in marketing (98%)" },
      { name: "Facebook Messenger", desc: "Engage leads in their native environment" },
      { name: "Instagram DMs", desc: "Turn followers into customers automatically" },
      { name: "WhatsApp", desc: "Global reach with personal-feeling communication" },
      { name: "Voice Calls", desc: "AI-assisted voice follow-up that sounds human" },
    ],
  },
  {
    icon: Bot,
    title: "AI Agent Suite",
    tagline: "Your team, but available 24/7 and infinitely scalable",
    color: "#00A79D",
    items: [
      { name: "Lead Qualification Agent", desc: "Score and sort leads automatically before human handoff" },
      { name: "Appointment Booking Agent", desc: "Fill your calendar without manual back-and-forth" },
      { name: "FAQ & Support Agent", desc: "Answer common questions instantly, in your brand voice" },
      { name: "Review & Reputation Agent", desc: "Generate 5-star reviews on autopilot" },
      { name: "Reactivation Agent", desc: "Wake up dormant leads with intelligent re-engagement" },
    ],
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    tagline: "No lead ever slips through the cracks again",
    color: "#1B75BB",
    items: [
      { name: "Speed-to-Lead Optimization", desc: "Respond within minutes — research shows 78% of deals go to the first responder" },
      { name: "Lead Nurture Sequences", desc: "Automated text, email, and voice sequences that keep prospects engaged" },
      { name: "Appointment Automation", desc: "Calendar integrations that increase bookings and reduce no-shows" },
      { name: "Reputation Management", desc: "Automated review generation and brand monitoring" },
    ],
  },
  {
    icon: Radio,
    title: "AI Visibility Services",
    tagline: "Be cited by AI, not just ranked by Google",
    color: "#79C5C7",
    items: [
      { name: "LLM Visibility Monitoring", desc: "Track your brand mentions inside ChatGPT, Gemini, Claude, and Perplexity" },
      { name: "AI Authority Building", desc: "Identify and cultivate the sources that inform AI answers" },
      { name: "AI Crawler Optimization", desc: "Prepare your website for GPTBot, ClaudeBot, and other AI crawlers" },
      { name: "AI Content Optimization", desc: "Create content formatted to appear in AI-generated responses" },
    ],
  },
  {
    icon: BarChart3,
    title: "SEO & Paid Media",
    tagline: "Qualified traffic at scale, continuously optimized",
    color: "#2EA6D4",
    items: [
      { name: "Google Business Profile", desc: "Dominate local search and Google Maps" },
      { name: "Schema & Structured Data", desc: "Help search engines and AI understand your content" },
      { name: "Topical Authority Content", desc: "Become the definitive resource in your niche" },
      { name: "High-Authority Backlinks", desc: "Build domain authority that compounds over time" },
      { name: "Retargeting Campaigns", desc: "Convert the 98% who didn't convert on their first visit" },
    ],
  },
];

function ServiceCard({ service, index, isInView }: { service: typeof services[0]; index: number; isInView: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left flex items-start gap-4 group"
      >
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: service.color + "15", border: `1px solid ${service.color}25` }}
        >
          <service.icon className="w-6 h-6" style={{ color: service.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-white group-hover:text-[#79C5C7] transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-[#e8f4f8]/50 mt-0.5">{service.tagline}</p>
        </div>
        <div className="flex-shrink-0 mt-1">
          {expanded ? (
            <ChevronUp className="w-5 h-5 text-[#79C5C7]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#e8f4f8]/40" />
          )}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-0">
          <div
            className="h-px mb-5"
            style={{ background: `linear-gradient(90deg, ${service.color}30, transparent)` }}
          />
          <div className="space-y-3">
            {service.items.map((item, j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: j * 0.05 }}
                className="flex items-start gap-3"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: service.color }}
                />
                <div>
                  <span className="text-sm font-medium text-white">{item.name}</span>
                  <span className="text-sm text-[#e8f4f8]/45"> — {item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A79D]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A79D]/10 border border-[#00A79D]/20 text-[#00A79D] text-sm mb-6">
            <Search className="w-4 h-4" />
            Full-Spectrum Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Everything you need.{" "}
            <span className="gradient-text">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/55 max-w-2xl mx-auto">
            Six integrated service areas that work together as a unified system — not a
            collection of disconnected tactics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
