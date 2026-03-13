/**
 * Injects structured data (JSON-LD) and ARIA labels into ALL static HTML
 * pages across the site (excluding services/ which was already processed).
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, basename, relative } from "path";

const ROOT = process.cwd();
const BOOKING_URL =
  "https://link.actionpotential.ai/widget/booking/ksD7NPYqg5JoFugUIJnm";

const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "scripts", "src", "public", "services"]);

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

function guessSchemaType(filePath) {
  const rel = relative(ROOT, filePath).toLowerCase();
  if (rel.includes("location")) return "LocalBusiness";
  if (rel.includes("industr")) return "Service";
  if (rel.includes("blog")) return "Article";
  if (rel.includes("case-stud")) return "Article";
  if (rel.includes("faq")) return "FAQPage";
  if (rel.includes("platform") || rel.includes("solution")) return "SoftwareApplication";
  if (rel.includes("result")) return "WebPage";
  if (rel.includes("who-we-are")) return "AboutPage";
  if (rel.includes("privacy") || rel.includes("terms")) return "WebPage";
  return "WebPage";
}

function buildJsonLd(meta, schemaType) {
  const base = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: meta.title.replace(" | ActionPotential.AI", ""),
    description: meta.description,
    url: meta.canonical,
  };

  if (["Service", "LocalBusiness", "SoftwareApplication", "WebPage", "AboutPage"].includes(schemaType)) {
    base.provider = {
      "@type": "Organization",
      name: "ActionPotential.AI",
      url: "https://actionpotential.ai",
    };
  }

  if (schemaType === "Article") {
    base.author = {
      "@type": "Organization",
      name: "ActionPotential.AI",
    };
  }

  if (["Service", "LocalBusiness", "SoftwareApplication"].includes(schemaType)) {
    base.potentialAction = {
      "@type": "ReserveAction",
      name: "Book Free AI Audit",
      target: { "@type": "EntryPoint", urlTemplate: BOOKING_URL },
    };
  }

  return base;
}

function buildHiddenSummary(meta) {
  const service = meta.eyebrow || meta.title.replace(" | ActionPotential.AI", "");
  return `
    <div role="region" aria-label="Page solution summary" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0" data-solution="primary">
      <p><strong>Page:</strong> ${service}</p>
      <p><strong>Answer:</strong> ${meta.h1}</p>
      <p><strong>Detail:</strong> ${meta.description}</p>
      <p><strong>Provider:</strong> ActionPotential.AI — Behavioral AI Marketing &amp; Automation Agency</p>
    </div>`;
}

function processFile(filePath) {
  let html = readFileSync(filePath, "utf-8");
  const meta = extractMeta(html);
  const rel = relative(ROOT, filePath);

  if (!meta.title) {
    console.log(`  Skip ${rel} — no title`);
    return;
  }

  if (html.includes('data-solution="primary"')) {
    console.log(`  Skip ${rel} — already processed`);
    return;
  }

  const schemaType = guessSchemaType(filePath);

  const hasAnyLd = html.includes('application/ld+json');
  if (!hasAnyLd) {
    const jsonLd = JSON.stringify(buildJsonLd(meta, schemaType), null, 2);
    const scriptTag = `    <script type="application/ld+json">\n${jsonLd}\n    </script>\n`;
    html = html.replace("</head>", `${scriptTag}  </head>`);
  }

  const mainTag = '<main id="main" class="container">';
  if (html.includes(mainTag)) {
    const label = meta.h1 || meta.description;
    const ariaMain = `<main id="main" class="container" aria-label="${label}">`;
    html = html.replace(mainTag, ariaMain);
  }

  const heroSection = '<section class="hero">';
  if (html.includes(heroSection)) {
    const ariaLabel = meta.eyebrow
      ? `${meta.eyebrow}: ${meta.h1}`
      : meta.h1;
    const ariaHero = `<section class="hero" aria-label="${ariaLabel}">${buildHiddenSummary(meta)}`;
    html = html.replace(heroSection, ariaHero);
  }

  writeFileSync(filePath, html, "utf-8");
  console.log(`  ✓ ${rel} (${schemaType})`);
}

function walkDir(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry)) continue;
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (stat.isFile() && entry.endsWith(".html")) {
      processFile(fullPath);
    }
  }
}

console.log("Injecting solution meta into all remaining static pages...");
walkDir(ROOT);
console.log("Done.");
