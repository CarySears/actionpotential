export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for ActionPotential.AI. Review service scope, payments, disclaimers, and legal terms.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-[#79C5C7]">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Terms of Service</h1>
          <p className="text-[#e8f4f8]/75">Effective date: March 10, 2026</p>
        </header>

        <section className="glass-card p-6 sm:p-8 space-y-6 text-[#e8f4f8]/80 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">1. Use of This Website</h2>
            <p>
              By using this website, you agree to these terms and to lawful use of site content and
              functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">2. Services and Scope</h2>
            <p>
              ActionPotential.AI provides strategy, marketing, and automation services. Specific
              deliverables and timelines are defined in signed client agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">3. No Guaranteed Outcomes</h2>
            <p>
              We apply best-practice methods, but outcomes depend on factors outside our control.
              We do not guarantee specific revenue, ranking, or lead volume results.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">4. Limitation of Liability</h2>
            <p>
              To the fullest extent allowed by law, ActionPotential.AI is not liable for indirect,
              incidental, or consequential damages related to site use or service delivery.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">5. Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a className="text-[#79C5C7] hover:text-[#2EA6D4]" href="mailto:hello@actionpotential.ai">
                hello@actionpotential.ai
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
