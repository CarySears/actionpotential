import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://actionpotential.ai"),
  title: {
    default: "ActionPotential.AI — Behavioral AI Marketing & Automation Agency",
    template: "%s | ActionPotential.AI",
  },
  description:
    "ActionPotential.AI is a behavioral AI marketing and automation agency. We help businesses acquire more customers, convert more leads, and scale operations through human-centered artificial intelligence rooted in behavioral science.",
  keywords: [
    "AI marketing agency",
    "behavioral AI marketing",
    "marketing automation",
    "AI lead generation",
    "lead conversion",
    "conversational marketing",
    "AI agents for business",
    "speed to lead optimization",
    "AEO ask engine optimization",
    "AI visibility",
    "full funnel marketing",
    "behavioral science marketing",
    "human-centered AI",
    "small business marketing automation",
  ],
  authors: [{ name: "Cary Sears", url: "https://actionpotential.ai" }],
  creator: "ActionPotential.AI",
  publisher: "ActionPotential.AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://actionpotential.ai",
    siteName: "ActionPotential.AI",
    title: "ActionPotential.AI — From Potential to Action",
    description:
      "Behavioral AI marketing and automation agency. We build systems that acquire customers, convert leads, and scale operations through human-centered AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ActionPotential.AI — Behavioral AI Marketing & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ActionPotential.AI — Behavioral AI Marketing & Automation",
    description:
      "We build AI-powered systems that acquire customers, convert leads, and scale operations through human-centered artificial intelligence.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://actionpotential.ai",
  },
};

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ActionPotential.AI",
    url: "https://actionpotential.ai",
    logo: "https://actionpotential.ai/logo.png",
    description:
      "Behavioral AI marketing and automation agency helping businesses acquire more customers, convert more leads, and scale operations through human-centered artificial intelligence.",
    founder: {
      "@type": "Person",
      name: "Cary Sears",
      jobTitle: "Founder & CEO",
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Cleveland Clinic" },
      ],
      knowsAbout: [
        "Experimental Psychology",
        "User Experience Design",
        "Behavioral Science",
        "AI Marketing",
      ],
    },
    sameAs: [],
    serviceType: [
      "AI Marketing",
      "Marketing Automation",
      "Behavioral AI",
      "Lead Generation",
      "Conversational Marketing",
      "SEO",
      "AEO",
      "AI Visibility",
    ],
    areaServed: "US",
    knowsAbout: [
      "Behavioral AI Marketing",
      "Marketing Automation",
      "Conversational Marketing",
      "Ask Engine Optimization",
      "AI Agent Deployment",
      "Lead Generation",
      "Speed to Lead Optimization",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ActionPotential.AI",
    url: "https://actionpotential.ai",
    description:
      "Behavioral AI marketing and automation agency for service businesses.",
    priceRange: "$$",
    serviceType: [
      "AI Marketing Automation",
      "Lead Generation",
      "Conversational Marketing",
      "SEO",
      "AEO (Ask Engine Optimization)",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a behavioral AI marketing agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A behavioral AI marketing agency combines artificial intelligence, marketing automation, behavioral science, and user experience design to build systems that acquire customers and convert leads automatically. Unlike traditional agencies that focus on one channel, ActionPotential.AI builds full-funnel systems that guide prospects from first impression to loyal advocate.",
        },
      },
      {
        "@type": "Question",
        name: "How is ActionPotential.AI different from a regular marketing agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most agencies hand you leads and disappear. ActionPotential.AI builds the entire system — from attracting the right traffic, to engaging visitors in real-time conversations, to converting and retaining customers automatically. Their systems are grounded in behavioral science and powered by AI, so they get smarter over time.",
        },
      },
      {
        "@type": "Question",
        name: "What is AEO (Ask Engine Optimization)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AEO stands for Ask Engine Optimization — optimizing your content to appear in AI-generated answers from tools like ChatGPT, Perplexity, Gemini, and Claude. As more people use AI to research purchasing decisions, being visible in these answers is becoming essential for businesses.",
        },
      },
      {
        "@type": "Question",
        name: "What is speed-to-lead optimization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Speed-to-lead refers to how quickly you respond to new inquiries. Research shows that responding within 5 minutes makes you 100x more likely to convert a lead compared to waiting 30 minutes. ActionPotential.AI's automation systems ensure every inquiry gets an immediate, intelligent response.",
        },
      },
      {
        "@type": "Question",
        name: "Does ActionPotential.AI require long-term contracts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. ActionPotential.AI does not lock clients into long-term contracts. They earn continued trust through results. If they're not delivering, clients have the freedom to walk away.",
        },
      },
      {
        "@type": "Question",
        name: "What types of businesses does ActionPotential.AI work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ActionPotential.AI primarily serves small and midsize service businesses, including healthcare and wellness practices, coaching and consulting firms, legal and professional services, real estate, hospitality, and home services.",
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "ActionPotential.AI",
    },
    name: "Behavioral AI Marketing & Automation",
    description:
      "Full-funnel behavioral AI marketing system including omnichannel visibility, conversational marketing, AI agent deployment, marketing automation, AI visibility services, and SEO/paid media.",
    serviceType: "AI Marketing Automation",
    offers: {
      "@type": "Offer",
      name: "Free AI Audit & Marketing Strategy Session",
      price: "0",
      priceCurrency: "USD",
      description:
        "Complimentary consultation including AI audit, customer journey mapping, gap identification, and strategic recommendations for AI-driven growth.",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <FAQSchema />
        <ServiceSchema />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
