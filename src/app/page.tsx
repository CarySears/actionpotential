import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import WhyName from "@/components/WhyName";
import BehavioralEngine from "@/components/BehavioralEngine";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import Process from "@/components/Process";
import WhoWeServe from "@/components/WhoWeServe";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BrandGeometry from "@/components/BrandGeometry";
import SolutionMeta from "@/components/SolutionMeta";

export default function Home() {
  return (
    <main
      className="relative isolate min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]"
      aria-label="ActionPotential.AI — Behavioral AI marketing and automation agency that turns leads into booked customers"
    >
      <SolutionMeta />
      <BrandGeometry />
      <div className="relative z-10">
        <Navbar />
        <article itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="Behavioral Engine — Full-Funnel AI Marketing & Automation" />
          <meta itemProp="description" content="Full-funnel AI marketing automation system that turns more leads into booked customers through faster response, smarter follow-up, and behavioral science." />
          <meta itemProp="provider" content="ActionPotential.AI" />
          <Hero />
          <TrustBar />
          <Problem />
          <WhyName />
          <BehavioralEngine />
          <Services />
          <Differentiators />
          <Process />
          <WhoWeServe />
          <Founder />
          <CTA />
        </article>
        <Footer />
      </div>
    </main>
  );
}
