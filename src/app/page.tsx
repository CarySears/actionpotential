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
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />

      {/* Brand wave — coral/magenta/blue/teal — marks major thematic shift */}
      <WaveDivider variant={1} height={90} />

      <WhyName />
      <BehavioralEngine />

      {/* Mirrored wave — teal/blue/magenta/coral — visual rhythm */}
      <WaveDivider variant={3} height={90} flip />

      <Services />
      <Differentiators />
      <Process />

      {/* Wave before the social proof cluster */}
      <WaveDivider variant={2} height={90} />

      <WhoWeServe />

      {/* Wave before founder / story */}
      <WaveDivider variant={4} height={90} flip />

      <Founder />
      <CTA />
      <Footer />
    </main>
  );
}
