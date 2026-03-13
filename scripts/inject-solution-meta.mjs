/**
 * Injects structured data (JSON-LD) and ARIA labels into static HTML
 * service pages to pass the "Blindfold Test" — making the primary solution
 * machine-identifiable within the first DOM nodes.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, basename } from "path";

const SERVICES_DIR = join(process.cwd(), "services");
const BOOKING_URL =
  "https://link.actionpotential.ai/widget/booking/ksD7NPYqg5JoFugUIJnm";

function extractMeta(html) {
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const descMatch = html.match(
    /<meta\s+name="description"\s+content="([^"]+)"/
  );
  const canonicalMatch = html.match(
    /<link\s+rel="canonical"\s+href="([^"]+)"/
  );
  const h1Match = html.match(/<h1>([^<]+)<\/h1>/);
  const eyebrowMatch = html.match(
    /<span class="eyebrow">([^<]+)<\/span>/
  );

  return {
    title: titleMatch ? titleMatch[1].trim() : "",
    description: descMatch ? descMatch[1].trim() : "",
    canonical: canonicalMatch ? canonicalMatch[1].trim() : "",
    h1: h1Match ? h1Match[1].trim() : "",
    eyebrow: eyebrowMatch ? eyebrowMatch[1].trim() : "",
  };
}

function buildServiceJsonLd(meta) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: meta.title.replace(" | ActionPotential.AI", ""),
    description: meta.description,
    url: meta.canonical,
    provider: {
      "@type": "Organization",
      name: "ActionPotential.AI",
      url: "https://actionpotential.ai",
    },
    areaServed: { "@type": "Country", name: "United States" },
    potentialAction: {
      "@type": "ReserveAction",
      name: "Book Free AI Audit",
      target: {
        "@type": "EntryPoint",
        urlTemplate: BOOKING_URL,
      },
    },
  };
}

function buildHiddenSummary(meta) {
  return `
    <div role="region" aria-label="Page solution summary" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0" data-solution="primary">
      <p><strong>Service:</strong> ${meta.eyebrow || meta.title.replace(" | ActionPotential.AI", "")}</p>
      <p><strong>Solution:</strong> ${meta.h1}</p>
      <p><strong>Detail:</strong> ${meta.description}</p>
      <p><strong>Provider:</strong> ActionPotential.AI — Behavioral AI Marketing &amp; Automation Agency</p>
      <p><strong>Action:</strong> Book a free AI Audit</p>
    </div>`;
}

function processFile(filePath) {
  let html = readFileSync(filePath, "utf-8");
  const meta = extractMeta(html);

  if (!meta.title) {
    console.log(`  Skipping ${basename(filePath)} — no title found`);
    return;
  }

  const alreadyHasServiceLd = html.includes('"@type": "Service"') || html.includes('"@type":"Service"');
  if (!alreadyHasServiceLd) {
    const jsonLd = JSON.stringify(buildServiceJsonLd(meta), null, 2);
    const scriptTag = `    <script type="application/ld+json">\n${jsonLd}\n    </script>\n`;

    html = html.replace("</head>", `${scriptTag}  </head>`);
  }

  if (!html.includes('aria-label') || !html.includes('data-solution="primary"')) {
    const mainTag = '<main id="main" class="container">';
    if (html.includes(mainTag) && !html.includes('data-solution="primary"')) {
      const ariaMain = `<main id="main" class="container" aria-label="${meta.h1}">`;
      html = html.replace(mainTag, ariaMain);

      const heroSection = '<section class="hero">';
      if (html.includes(heroSection)) {
        const ariaHero = `<section class="hero" aria-label="${meta.eyebrow}: ${meta.h1}">${buildHiddenSummary(meta)}`;
        html = html.replace(heroSection, ariaHero);
      }
    }
  }

  writeFileSync(filePath, html, "utf-8");
  console.log(`  ✓ ${basename(filePath)}`);
}

function walkDir(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isFile() && entry.endsWith(".html")) {
      processFile(fullPath);
    }
  }
}

console.log("Injecting solution meta into service pages...");
walkDir(SERVICES_DIR);
console.log("Done.");
