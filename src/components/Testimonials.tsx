"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mauro Clerici",
    company: "Vesping Around",
  },
  {
    name: "Daniel G. Wong, M.D.",
    company: "Child Psychiatrist",
  },
  {
    name: "Jai McPheron",
    company: "Integrated Mindfulness Institute",
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="glass-card overflow-hidden flex flex-col" style={{ minHeight: "400px" }}>
      {/* Video placeholder */}
      <div className="flex-1 bg-[#e8f4f8]/4 flex items-end justify-center pb-6 pt-6 min-h-[280px]">
        <div className="text-center">
          <p className="text-sm font-semibold text-[#e8f4f8]/75">{testimonial.name}</p>
          <p className="text-xs text-[#e8f4f8]/50 mt-0.5">{testimonial.company}</p>
        </div>
      </div>
      {/* Footer */}
      <div className="px-6 py-4 border-t border-[#e8f4f8]/8">
        <p className="text-xs text-[#e8f4f8]/35 italic text-center">[ Video embed ]</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B75BB]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] text-xs mb-6 uppercase tracking-wider">
            Real Results
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Hear it from the businesses
            <br />
            <span className="gradient-text">running the system.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/78 max-w-xl leading-relaxed">
            Client feedback highlights faster response, stronger conversion consistency, and revenue
            from leads they thought were gone.
          </p>
        </motion.div>

        {/* Desktop: 3-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden sm:grid sm:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Carousel */}
        <div className="sm:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard testimonial={testimonials[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#79C5C7] hover:bg-[#79C5C7]/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-[#79C5C7] w-5" : "bg-[#e8f4f8]/25"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#79C5C7] hover:bg-[#79C5C7]/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
