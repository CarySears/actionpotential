import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
      "@type": "Organization",
      "@id": "https://actionpotential.ai/#organization",
      name: "ActionPotential.AI",
      url: "https://actionpotential.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://actionpotential.ai/logo.png",
      },
      description:
        "A behavioral AI marketing and automation agency helping businesses acquire more customers, convert more leads, and scale operations through human-centered artificial intelligence.",
      founder: {
        "@type": "Person",
        name: "Cary Sears",
        jobTitle: "Founder & CEO",
        description:
          "UX strategist, applied behavioral scientist, and marketer with dual master's degrees in Experimental Psychology and User Experience Design.",
      },
      sameAs: [],
      serviceType: [
        "AI Marketing Automation",
        "Lead Generation",
        "Conversational Marketing",
        "SEO",
        "AI Search",
        "AI discoverability",
        "Google Ads",
        "Meta Ads",
        "Behavioral Engine Design",
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
      "@type": "FAQPage",
      mainEntity: [
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <Script
          id="sa-dynamic-optimization"
          type="text/javascript"
          data-uuid="d8e45ecc-75ef-46f0-ba55-991a28bf2b5e"
          src="data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQuZGF0YXNldC51dWlkID0gImQ4ZTQ1ZWNjLTc1ZWYtNDZmMC1iYTU1LTk5MWEyOGJmMmI1ZSI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw=="
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
