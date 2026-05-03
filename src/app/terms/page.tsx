"use client";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <a href="/realestate-cmo/" className="font-semibold text-sm tracking-tight">
            ← Back to RealEstate<span className="gradient-text">CMO</span>
          </a>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-6 py-12 max-w-2xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: May 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using RealEstateCMO (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service.
              If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">2. Description of Service</h2>
            <p>
              RealEstateCMO provides an AI-powered marketing assistant for real estate professionals,
              accessible via Telegram. The Service drafts lead responses, social media content, SOI
              nurture messages, review responses, and morning briefings. All content is AI-generated
              and should be reviewed by a licensed professional before use.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Review all AI-generated content before sending or publishing</li>
              <li>Comply with RECO (Real Estate Council of Ontario) regulations</li>
              <li>Not use the Service for spam, harassment, or illegal activities</li>
              <li>Keep your Telegram and Gmail credentials secure</li>
              <li>Not resell or redistribute the Service without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">4. Subscription &amp; Billing</h2>
            <p>
              The Service is offered at $49/month with a 1-day free trial. Subscription fees are
              non-refundable. You may cancel anytime — access continues until the end of the current
              billing period. We reserve the right to modify pricing with 30 days notice.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
            <p>
              RealEstateCMO is provided &ldquo;as is&rdquo; without warranties of any kind. We are not
              liable for any damages arising from the use of AI-generated content, including but not
              limited to lost sales, compliance violations, or reputational harm. AI outputs should
              always be reviewed by a human before use.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">6. Fair Housing Compliance</h2>
            <p>
              Users are responsible for ensuring all content complies with the Ontario Human Rights
              Code and the Canadian Human Rights Act. AI-generated content must never include
              discriminatory language related to race, religion, family status, disability, or any
              protected class. Review all outputs before use.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">7. Termination</h2>
            <p>
              We may suspend or terminate your access to the Service at any time for violation of
              these terms. Upon termination, your data will be retained for 30 days before deletion.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">8. Contact</h2>
            <p>
              Questions about these terms? Email us at{' '}
              <a href="mailto:hello@realestatecmo.ai" className="underline hover:text-foreground">
                hello@realestatecmo.ai
              </a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
