"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Try to send to webhook (if available)
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      }
    } catch {
      // Silently fail — webhook might not be running yet
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ─── NAV ─── */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-sm tracking-tight">
            RealEstate<span className="gradient-text">CMO</span>
          </span>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="max-w-xl w-full text-center mx-auto">
          {/* Badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-card text-xs text-muted-foreground">
              🇨🇦 Ontario real estate agents
            </div>
          </div>

          <h1 className="text-[2rem] leading-[1.15] sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Meet your AI CMO.
            <br />
            <span className="text-muted-foreground">For real estate.</span>
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            The only AI agent that handles lead response, SOI nurture, content,
            and reviews — 24/7, right in Telegram.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 rounded-2xl border bg-card sm:pr-2 shadow-[0_8px_16px_-8px_hsl(var(--border))]">
                <div className="flex items-center gap-2 px-4 pt-4 sm:pt-0 sm:pl-4">
                  <svg
                    className="w-4 h-4 text-muted-foreground shrink-0"
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
                    className="flex-1 py-3 sm:py-3.5 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none min-w-0"
                  />
                </div>
                <button
                  type="submit"
                  className="gradient-cta text-white text-sm font-medium px-5 py-3 rounded-xl sm:rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 mx-4 mb-3 sm:mx-0 sm:mb-0"
                >
                  Get early access
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                $49/mo &middot; 1 day free trial &middot; Cancel anytime
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

        {/* Cities scroll */}
        <div className="mt-16 sm:mt-20 w-full overflow-hidden">
          <p className="text-center text-[11px] text-muted-foreground mb-3">
            Built for agents across Ontario
          </p>
          <div className="flex overflow-hidden mask-x-fade">
            <div className="flex gap-2 animate-marquee">
              {[...cities, ...cities].map((city, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full border bg-card text-[11px] text-muted-foreground whitespace-nowrap"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING BANNER ─── */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-md mx-auto w-full">
        <div className="rounded-2xl border bg-card p-6 sm:p-8 text-center">
          <p className="text-xs text-muted-foreground mb-2">Launch pricing</p>
          <p className="text-5xl sm:text-6xl font-bold tracking-tight mb-2">
            $49<span className="text-lg text-muted-foreground font-normal">/mo</span>
          </p>
          <p className="text-xs text-muted-foreground">
            1 day free trial &middot; Cancel anytime
          </p>
        </div>
      </section>

      {/* ─── AGENTS GRID ─── */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Your AI marketing co-pilot
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Everything a marketing team does — handled for you. You stay in
            control.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {agents.map((agent) => (
            <div
              key={agent.title}
              className="p-5 rounded-2xl border bg-card hover:border-border/60 transition-colors"
            >
              <div className="text-xl mb-3">{agent.icon}</div>
              <h3 className="text-sm font-semibold mb-1.5">{agent.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {agent.desc}
              </p>
              {agent.tag && (
                <span className="inline-block mt-3 text-[10px] px-2 py-0.5 rounded-full border bg-secondary text-muted-foreground">
                  {agent.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHAT IT REPLACES ─── */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-3xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            The $3,000/mo assistant for $49/mo
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            What an AI CMO replaces vs. what it costs
          </p>
        </div>

        <div className="rounded-2xl border bg-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b text-[11px] sm:text-xs text-muted-foreground">
                <th className="text-left py-3 px-4 sm:px-6 font-medium">What needs doing</th>
                <th className="text-right py-3 px-4 sm:px-6 font-medium">Without</th>
                <th className="text-right py-3 px-4 sm:px-6 font-medium">With RealEstateCMO</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {comparisons.map((row, i) => (
                <tr key={i} className="border-b border-border/40 last:border-0">
                  <td className="py-3 px-4 sm:px-6 text-muted-foreground text-xs sm:text-sm">{row.label}</td>
                  <td className="py-3 px-4 sm:px-6 text-right text-muted-foreground/50 text-xs sm:text-sm">
                    {row.without}
                  </td>
                  <td className="py-3 px-4 sm:px-6 text-right font-medium text-xs sm:text-sm">
                    {row.with_}
                  </td>
                </tr>
              ))}
              <tr className="bg-secondary">
                <td className="py-3.5 px-4 sm:px-6 font-semibold text-sm">Total per month</td>
                <td className="py-3.5 px-4 sm:px-6 text-right text-muted-foreground font-semibold text-sm">
                  $3,000+
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-right font-bold">
                  $49/mo
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border bg-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-4 sm:px-5 py-3.5 flex justify-between items-center hover:bg-secondary/50 transition-colors gap-3"
              >
                <span className="text-sm font-medium leading-snug">{faq.q}</span>
                <span className="text-muted-foreground shrink-0">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-4 sm:px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-3">
          Your AI CMO
          <br />
          <span className="text-muted-foreground">for real estate</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-8">
          The only agent you need for leads, SOI, content, and reviews — one
          Telegram thread.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 rounded-2xl border bg-card sm:pr-2">
            <input
              type="email"
              placeholder="Your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3.5 sm:py-4 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="gradient-cta text-white text-sm font-medium px-5 py-3 sm:py-3.5 rounded-xl hover:opacity-90 transition-opacity mx-4 mb-3 sm:mx-0 sm:mb-0 whitespace-nowrap"
            >
              Join early access
            </button>
          </div>
        </form>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-4 sm:px-6 py-10 border-t mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <span>© 2026 RealEstateCMO</span>
          <div className="flex gap-5">
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
  "Toronto", "Ottawa", "Mississauga", "Oakville", "Burlington",
  "Hamilton", "London", "Kitchener", "Waterloo", "Markham",
  "Vaughan", "Richmond Hill", "Brampton", "Milton", "Guelph",
  "Barrie", "Kingston", "Windsor",
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
    desc: "Share a listing — get Instagram & Facebook post drafts in your voice. No more blank screen staring.",
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
    a: "For launch, yes. The AI understands Ontario real estate — TREB forms, RECO compliance, Land Transfer Tax. We'll expand later.",
  },
  {
    q: "When does it launch?",
    a: "We're onboarding our first 10 Ontario agents now. Join the early access list and we'll reach out soon.",
  },
];
