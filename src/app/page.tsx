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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117]">
      <Navbar />
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
      <Footer />
    </main>
  );
}
