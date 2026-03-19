"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, TrendingUp } from "lucide-react";

const listItems = [
  { icon: Star, text: "More 5-star reviews" },
  { icon: TrendingUp, text: "Google local rankings" },
  { icon: TrendingUp, text: "AI engine recommendations" },
  { icon: TrendingUp, text: "Domain entity authority" },
  { icon: TrendingUp, text: "Organic traffic" },
  { icon: TrendingUp, text: "Trust + conversions" },
];

export default function ReviewsVisibility() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs uppercase tracking-widest text-[#e8f4f8]/60 mb-4">
          Why Reviews Are a Visibility Asset
        </div>
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-[#e8f4f8]/12">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: Headline + body */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                More 5-star reviews don&apos;t just build trust. They make you easier to find.
              </h2>
              <p className="text-[#e8f4f8]/82 leading-relaxed">
                Reviews AI automates your reputation management — but the impact goes far beyond
                what prospects think of you. Google rewards review volume and recency with higher
                local rankings. AI engines like ChatGPT and Perplexity factor review sentiment into
                business recommendations. A stronger review profile means more organic visibility,
                more traffic, and more conversions — without a single dollar of additional ad
                spend.
              </p>
            </div>

            {/* Right: List */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-[#e8f4f8]/5 border border-[#e8f4f8]/10 overflow-hidden">
                {listItems.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-4 py-4 ${
                      i < listItems.length - 1 ? "border-b border-[#e8f4f8]/10" : ""
                    } ${i % 2 === 1 ? "bg-[#e8f4f8]/[0.02]" : ""}`}
                  >
                    <item.icon
                      className="w-5 h-5 flex-shrink-0 text-[#79C5C7]"
                      fill={item.icon === Star ? "currentColor" : "none"}
                    />
                    <span className="text-sm font-medium text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
