export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for ActionPotential.AI. Learn what data we collect, how we use it, and how to request data updates.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-[#79C5C7]">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Privacy Policy</h1>
          <p className="text-[#e8f4f8]/75">Effective date: March 10, 2026</p>
        </header>

        <section className="glass-card p-6 sm:p-8 space-y-6 text-[#e8f4f8]/80 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">1. Information We Collect</h2>
            <p>
              We may collect information you provide directly to us, including your name, email,
              phone number, business details, and information shared through forms, scheduling
              tools, chat, or direct communication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">2. How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to inquiries and schedule strategy sessions</li>
              <li>To provide and improve services</li>
              <li>To communicate service and support updates</li>
              <li>To analyze usage and improve user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">3. Data Sharing</h2>
            <p>
              We do not sell personal information. We may share data with trusted providers who
              support operations, platform functionality, and service delivery.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">4. Your Choices</h2>
            <p>
              To request access, correction, or deletion of your data, contact{" "}
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
