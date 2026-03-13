import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ScriptHTMLAttributes } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

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
    default: "ActionPotential.AI | Behavioral AI Marketing & Automation Agency",
    template: "%s | ActionPotential.AI",
  },
  description:
    "ActionPotential.AI is a behavioral AI marketing and automation agency. We help businesses acquire more customers, convert more leads, and scale operations through human-centered artificial intelligence. From potential... to action.",
  keywords: [
    "behavioral AI marketing",
    "AI marketing automation",
    "lead conversion AI",
    "marketing automation agency",
    "AI lead generation",
    "conversational marketing",
    "AI Search optimization",
    "AI discoverability optimization",
    "behavioral science marketing",
    "full-funnel marketing automation",
    "SMS marketing automation",
    "AI chatbot agency",
    "growth marketing AI",
    "CRO behavioral design",
  ],
  authors: [{ name: "Cary Sears", url: "https://actionpotential.ai" }],
  creator: "ActionPotential.AI",
  publisher: "ActionPotential.AI",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://actionpotential.ai",
    siteName: "ActionPotential.AI",
    title: "ActionPotential.AI | Behavioral AI Marketing & Automation Agency",
    description:
      "We sit at the intersection of AI, behavioral science, and growth marketing — building full-funnel systems that turn strangers into customers, automatically.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ActionPotential.AI - From potential... to action.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ActionPotential.AI | Behavioral AI Marketing & Automation Agency",
    description:
      "Behavioral AI marketing and automation. We build the system that turns leads into customers — automatically, and at scale.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://actionpotential.ai",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://actionpotential.ai/#organization",
      name: "ActionPotential.AI",
      url: "https://actionpotential.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://actionpotential.ai/logo.png",
      },
      description:
        "Behavioral AI marketing and automation agency helping service businesses turn qualified traffic into booked customers through human-centered AI, behavioral science, and full-funnel automation.",
      slogan: "From potential... to action.",
      founder: {
        "@type": "Person",
        name: "Cary Sears",
        jobTitle: "Founder & CEO",
        description:
          "Applied behavioral scientist and UX strategist with dual master's degrees in Experimental Psychology and User Experience Design.",
      },
      email: "hello@actionpotential.ai",
      areaServed: ["Westchester County, NY", "New York City, NY", "United States"],
      knowsAbout: [
        "Behavioral AI marketing",
        "AI marketing automation",
        "Lead conversion optimization",
        "Conversational marketing",
        "AI Search optimization",
        "Full-funnel growth systems",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://actionpotential.ai/#website",
      url: "https://actionpotential.ai",
      name: "ActionPotential.AI",
      publisher: {
        "@id": "https://actionpotential.ai/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://actionpotential.ai/#webpage",
      url: "https://actionpotential.ai",
      name: "ActionPotential.AI | Behavioral AI Marketing & Automation Agency",
      description:
        "ActionPotential.AI builds full-funnel behavioral AI growth systems for service businesses — combining SEO, AI Search, paid ads, conversational marketing, and automation into one coordinated system that turns more traffic into booked customers.",
      isPartOf: {
        "@id": "https://actionpotential.ai/#website",
      },
      about: {
        "@id": "https://actionpotential.ai/#primary-solution",
      },
      mainEntity: {
        "@id": "https://actionpotential.ai/#primary-solution",
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".hero-subheadline", "meta[name='description']"],
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://actionpotential.ai/og-image.png",
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "Service",
      "@id": "https://actionpotential.ai/#primary-solution",
      name: "Behavioral Engine — Full-Funnel AI Marketing & Automation System",
      alternateName: "Behavioral Engine",
      description:
        "The Behavioral Engine is ActionPotential.AI's primary solution: a full-funnel AI marketing and automation system that combines a Visibility Engine (SEO, AI Search, Google Ads, Meta Ads) with a Behavioral Conversion Engine (conversational AI, speed-to-lead, behavioral nurture sequences, appointment automation) and an AI Operations Suite — turning search and ad traffic into consistently booked customers for service businesses.",
      provider: {
        "@id": "https://actionpotential.ai/#organization",
      },
      serviceType: [
        "Behavioral AI marketing",
        "Conversational marketing",
        "Marketing automation",
        "Lead generation",
        "SEO and AI Search",
        "Paid media management",
        "AI discoverability optimization",
        "Appointment automation",
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Small and midsize service businesses, professional practices, and local businesses",
        geographicArea: "United States",
      },
      offers: {
        "@type": "Offer",
        name: "Free AI Audit",
        description:
          "A free AI audit assessing your current visibility, lead conversion funnel, speed-to-lead gaps, and automation opportunities.",
        url: "https://link.actionpotential.ai/widget/booking/ksD7NPYqg5JoFugUIJnm",
        price: "0",
        priceCurrency: "USD",
      },
      areaServed: ["Westchester County, NY", "New York City, NY", "United States"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://actionpotential.ai/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the primary solution ActionPotential.AI provides?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ActionPotential.AI's primary solution is the Behavioral Engine — a full-funnel AI marketing and automation system combining a Visibility Engine (SEO, AI Search, paid ads) and a Behavioral Conversion Engine (conversational AI, speed-to-lead, nurture sequences, appointment automation) into one coordinated system that turns qualified traffic into booked customers for service businesses.",
          },
        },
        {
          "@type": "Question",
          name: "What is ActionPotential.AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ActionPotential.AI is a behavioral AI marketing and automation agency. We sit at the intersection of AI, behavioral science, UX design, and growth marketing — building full-funnel systems that turn leads into customers automatically and at scale.",
          },
        },
        {
          "@type": "Question",
          name: "What is AI Search?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI Search is the practice of optimizing your content to appear in AI-generated answers from tools like ChatGPT, Perplexity, and Gemini. AI discoverability improves how often your brand appears in recommendation-style responses as buyers research decisions.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Behavioral Engine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Behavioral Engine is a full-funnel marketing system designed to move people through a continuous decision journey — from first impression to loyal advocate. It combines AI automation, behavioral science, conversational marketing, and omnichannel visibility to acquire, convert, and retain customers at scale.",
          },
        },
        {
          "@type": "Question",
          name: "Who does ActionPotential.AI work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We primarily work with small and midsize service businesses, professional practices, and local businesses — including healthcare & wellness, coaching & consulting, legal & professional services, real estate, hospitality, and home services.",
          },
        },
      ],
    },
  ],
};

type SearchAtlasScriptAttributes = ScriptHTMLAttributes<HTMLScriptElement> & {
  nowprocket?: string;
  "nitro-exclude"?: string;
  "data-uuid"?: string;
};

const searchAtlasScriptAttributes: SearchAtlasScriptAttributes = {
  nowprocket: "",
  "nitro-exclude": "",
  type: "text/javascript",
  id: "sa-dynamic-optimization",
  "data-uuid": "d37450f4-a42a-4db0-b3e9-d75c24291d58",
  src: "data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQuZGF0YXNldC51dWlkID0gImQzNzQ1MGY0LWE0MmEtNGRiMC1iM2U5LWQ3NWMyNDI5MWQ1OCI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw==",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = window.localStorage.getItem("apai-theme");
                const fallback = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                const theme = stored === "light" || stored === "dark" ? stored : fallback;
                document.documentElement.setAttribute("data-theme", theme);
                document.documentElement.style.colorScheme = theme;
              } catch {
                document.documentElement.setAttribute("data-theme", "dark");
                document.documentElement.style.colorScheme = "dark";
              }
            })();`,
          }}
        />
        <script {...searchAtlasScriptAttributes} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
