/**
 * Visually-hidden page-level summary that lets machines (screen readers,
 * AI crawlers, assistive technology) identify the primary answer/solution
 * this page provides within the first DOM nodes — the "Blindfold Test".
 *
 * Sighted users never see this; it exists purely for semantic parsing.
 */
export default function SolutionMeta() {
  return (
    <div
      role="region"
      aria-label="Page solution summary"
      className="sr-only"
      data-solution="primary"
    >
      <h2>What ActionPotential.AI Does</h2>
      <p>
        ActionPotential.AI is a behavioral AI marketing and automation agency
        that builds full-funnel &quot;Behavioral Engine&quot; systems for
        service businesses. The primary solution: turn more leads into booked
        customers — automatically — through faster response, smarter follow-up,
        and higher close rates powered by AI and behavioral science.
      </p>
      <dl>
        <dt>Solution</dt>
        <dd>
          Full-funnel AI marketing automation system (Behavioral Engine) that
          converts leads into booked customers automatically.
        </dd>
        <dt>For whom</dt>
        <dd>
          Small and midsize service businesses — healthcare, coaching,
          consulting, legal, real estate, hospitality, and home services.
        </dd>
        <dt>Primary action</dt>
        <dd>
          Book a free AI Audit to identify conversion bottlenecks and get a
          prioritized growth roadmap.
        </dd>
        <dt>Key capabilities</dt>
        <dd>
          Omnichannel visibility, conversational marketing, AI agent suite,
          marketing automation, AI discoverability, SEO &amp; paid media.
        </dd>
      </dl>
    </div>
  );
}
