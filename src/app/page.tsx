"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ─── NAV ─── */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
          <span className="font-semibold text-sm tracking-tight">
            RealEstate<span className="gradient-text">CMO</span>
          </span>
          <a
            href="#waitlist"
            className="gradient-cta text-white text-xs font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get early access
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 relative">
        <div className="max-w-2xl w-full text-center mx-auto pb-32 mt-20 sm:-mt-10">
          {/* Badge */}
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full border bg-card text-xs font-medium text-muted-foreground">
              🇨🇦 Ontario real estate agents
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Meet your AI CMO.
            <br />
            <span className="text-muted-foreground">For real estate.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            The only AI agent that handles lead response, SOI nurture, content,
            and reviews — 24/7, right in Telegram.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto w-full">
              <div className="relative flex items-center rounded-2xl border bg-card shadow-[0_12px_16px_-8px_hsl(var(--border))] focus-within:ring-1 focus-within:ring-ring transition-shadow">
                <svg
                  className="absolute left-5 w-5 h-5 text-muted-foreground pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="Your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 pl-12 pr-4 py-4 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
                />
                <button
                  type="submit"
                  className="gradient-cta text-white text-sm font-medium px-6 py-4 mr-2 my-2 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Get early access
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                $49/mo · 1 day free trial · Cancel anytime
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🎉</div>
              <p className="text-lg font-medium mb-2">You're on the list.</p>
              <p className="text-sm text-muted-foreground">
                We'll reach out when your AI CMO is ready.
              </p>
            </div>
          )}
        </div>

        {/* Logo scroll */}
        <div className="py-10 -mt-56 sm:py-14 w-full overflow-hidden">
          <div className="flex flex-col mb-32 gap-2.5 sm:gap-3 cursor-default select-none">
            <p className="text-center text-xs text-muted-foreground mb-4">
              Built for Ontario agents, from Toronto to Ottawa
            </p>
            <div className="flex overflow-hidden">
              <div className="flex gap-2 sm:gap-3 animate-marquee">
                {[...cities, ...cities].map((city, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full border bg-card text-xs font-medium text-muted-foreground"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING BANNER ─── */}
      <section className="px-4 sm:px-8 py-8 max-w-2xl mx-auto w-full">
        <div className="rounded-2xl border bg-card p-6 sm:p-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">Launch pricing</p>
          <div className="flex items-baseline justify-center gap-1 mb-3">
            <span className="text-5xl font-bold">$49</span>
            <span className="text-lg text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground">
            1 day free trial · Cancel anytime · No lock-in
          </p>
        </div>
      </section>

      {/* ─── AGENTS GRID ─── */}
      <section className="px-4 sm:px-8 py-24 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your AI marketing co-pilot
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Everything a marketing team does — handled for you. You stay in
            control, your AI does the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {agents.map((agent) => (
            <div
              key={agent.title}
              className="group p-5 sm:p-6 rounded-2xl border bg-card hover:border-border/60 transition-colors"
            >
              <div className="text-2xl mb-4">{agent.icon}</div>
              <h3 className="text-sm font-semibold mb-2">{agent.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {agent.desc}
              </p>
              {agent.tag && (
                <span className="inline-block mt-3 text-[11px] px-2 py-0.5 rounded-full border bg-secondary text-muted-foreground">
                  {agent.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHAT IT REPLACES ─── */}
      <section className="px-4 sm:px-8 py-24 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            The $3,000/mo assistant for $49/mo
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            What an AI CMO replaces vs. what it costs
          </p>
        </div>

        <div className="rounded-2xl border bg-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b text-xs font-medium text-muted-foreground">
                <th className="text-left py-4 px-4 sm:px-6">What needs doing</th>
                <th className="text-right py-4 px-4 sm:px-6">Without</th>
                <th className="text-right py-4 px-4 sm:px-6">With RealEstateCMO</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {comparisons.map((row, i) => (
                <tr key={i} className="border-b last:border-0 border-border/50">
                  <td className="py-3.5 px-4 sm:px-6 text-muted-foreground">{row.label}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-right text-muted-foreground/60">
                    {row.without}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-right font-medium">
                    {row.with_}
                  </td>
                </tr>
              ))}
              <tr className="bg-secondary">
                <td className="py-4 px-4 sm:px-6 font-semibold text-sm">Total per month</td>
                <td className="py-4 px-4 sm:px-6 text-right text-muted-foreground font-semibold text-sm">
                  $3,000+
                </td>
                <td className="py-4 px-4 sm:px-6 text-right font-bold text-lg">
                  $49/mo
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#waitlist"
            className="gradient-cta text-white text-sm font-medium px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity inline-block"
          >
            Get early access
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            First 10 Ontario agents get free onboarding
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 sm:px-8 py-24 max-w-2xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border bg-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-secondary/50 transition-colors"
              >
                <span className="text-sm font-medium">{faq.q}</span>
                <span className="text-muted-foreground text-lg ml-4">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-4 sm:px-8 py-24 text-center" id="waitlist">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          Your AI CMO
          <br />
          <span className="text-muted-foreground">for real estate</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto mb-10">
          The only agent you need for leads, SOI, content, and reviews — one
          Telegram thread.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="relative flex items-center rounded-2xl border bg-card shadow-[0_12px_16px_-8px_hsl(var(--border))] focus-within:ring-1 focus-within:ring-ring transition-shadow">
            <input
              type="email"
              placeholder="Your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-4 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="gradient-cta text-white text-sm font-medium px-6 py-4 mr-2 my-2 rounded-xl hover:opacity-90 transition-opacity"
            >
              Join early access
            </button>
          </div>
        </form>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-4 sm:px-8 py-12 border-t mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <span>© 2026 RealEstateCMO</span>
          <div className="flex gap-6">
            <a
              href="mailto:hello@realestatecmo.ai"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── DATA ─── */

const cities = [
  "Toronto",
  "Ottawa",
  "Mississauga",
  "Oakville",
  "Burlington",
  "Hamilton",
  "London",
  "Kitchener",
  "Waterloo",
  "Markham",
  "Vaughan",
  "Richmond Hill",
  "Brampton",
  "Milton",
  "Guelph",
  "Barrie",
  "Kingston",
  "Windsor",
];

const agents = [
  {
    icon: "⚡",
    title: "Lead Response Agent",
    desc: "Forward a lead — your bot drafts and sends a personalized response from your Gmail in under 60 seconds.",
    tag: "Highest ROI",
  },
  {
    icon: "🎂",
    title: "SOI Nurture Agent",
    desc: "Never miss a birthday, anniversary, or check-in. Your AI remembers every past client so you don't have to.",
  },
  {
    icon: "📱",
    title: "Content Agent",
    desc: "Share a listing — get Instagram & Facebook post drafts in your voice. No more staring at a blank screen.",
  },
  {
    icon: "⭐",
    title: "Review Agent",
    desc: "New Google review appears — your AI pings you and drafts a thoughtful response in minutes.",
  },
  {
    icon: "🌅",
    title: "Morning Briefing",
    desc: "7am daily: today's calendar, leads, SOI reminders, new reviews. Your entire day in one message.",
  },
  {
    icon: "🧠",
    title: "Learns Your Voice",
    desc: "Every edit makes the AI better. Over time, it writes like you — your tone, your phrases, your style.",
    tag: "Adaptive",
  },
];

const comparisons = [
  { label: "Lead response assistant", without: "$15–25/hr", with_: "$0" },
  { label: "Social media manager", without: "$500–1,500/mo", with_: "$0" },
  { label: "CRM + reminders", without: "$50–100/mo", with_: "$0" },
  { label: "Review monitoring", without: "$100–300/mo", with_: "$0" },
  { label: "Daily task planning", without: "30 min/day", with_: "$0" },
  { label: "Remembering SOI dates", without: "Impossible", with_: "Automatic" },
];

const faqs = [
  {
    q: "What exactly does the AI CMO do?",
    a: "It handles lead response, SOI nurture, social media content, review monitoring, and morning briefings — all through Telegram. You stay in control: the AI drafts, you approve and send.",
  },
  {
    q: "How does lead response work?",
    a: "Forward a lead inquiry to your bot. The AI drafts a personalized response with listing details and comps. You review it, say 'send', and it goes out via your Gmail in under 60 seconds.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. It's a Telegram bot — the app you already use. Connect your Gmail once (30-second Google OAuth), and that's it.",
  },
  {
    q: "What's the pricing?",
    a: "$49/month with a 1-day free trial. Cancel anytime — no lock-in, no long-term contracts.",
  },
  {
    q: "Is this only for Ontario agents?",
    a: "For launch, yes. The AI understands Ontario real estate — TREB forms, RECO compliance, Land Transfer Tax. We'll expand to other markets later.",
  },
  {
    q: "When does it launch?",
    a: "We're onboarding our first 10 Ontario agents now. Join the early access list and we'll reach out soon.",
  },
];
