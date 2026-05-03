"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // For now, just acknowledge. Will store to DB later.
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ─── HERO ─── */}
      <section className="relative px-6 pt-32 pb-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-8 text-sm border border-white/15 rounded-full text-white/50 bg-white/[0.03]">
            🇨🇦 Ontario real estate agents
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
            Meet your AI CMO.
            <br />
            <span className="text-white/30">For real estate.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            The only AI agent that handles lead response, SOI nurture, content,
            and reviews — 24/7, right in Telegram. For less than your Zillow leads.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto justify-center"
            >
              <input
                type="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-5 py-3.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all min-w-[240px]"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all"
              >
                Get early access
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <p className="text-lg text-white/80 mb-2">You're on the list.</p>
              <p className="text-sm text-white/40">
                We'll reach out when your AI CMO is ready. First 10 agents get free
                onboarding.
              </p>
            </div>
          )}

          <p className="text-sm text-white/30 mt-4">
            $49/mo · Launching soon · First day free
          </p>
        </div>
      </section>

      {/* ─── PRICING PREVIEW BANNER ─── */}
      <section className="px-6 py-8 max-w-2xl mx-auto">
        <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 text-center">
          <p className="text-sm text-white/40 mb-1">Launch pricing</p>
          <p className="text-4xl font-bold mb-2">
            $49<span className="text-lg text-white/40 font-normal">/month</span>
          </p>
          <p className="text-sm text-white/40">
            1 day free trial · Cancel anytime · No long-term contracts
          </p>
        </div>
      </section>

      {/* ─── AGENTS GRID ─── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your AI marketing co-pilot
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            Everything a marketing team does, handled for you. You stay in
            control — your AI does the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent) => (
            <div
              key={agent.title}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all"
            >
              <div className="text-2xl mb-4">{agent.icon}</div>
              <h3 className="text-base font-semibold mb-2">{agent.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {agent.desc}
              </p>
              {agent.tag && (
                <span className="inline-block mt-3 text-[11px] px-2 py-0.5 rounded-full bg-white/[0.06] text-white/30 border border-white/[0.08]">
                  {agent.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHAT IT REPLACES ─── */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            The $3,000/mo assistant for $49/mo
          </h2>
          <p className="text-lg text-white/40">
            What an AI CMO replaces vs. what it costs
          </p>
        </div>

        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.08] text-sm text-white/30">
                <th className="text-left py-4 px-6 font-normal">
                  What needs doing
                </th>
                <th className="text-right py-4 px-6 font-normal">Without</th>
                <th className="text-right py-4 px-6 font-normal text-white/60">
                  With RealEstateCMO
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {comparisons.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-white/[0.04] last:border-0"
                >
                  <td className="py-3.5 px-6 text-white/60">{row.label}</td>
                  <td className="py-3.5 px-6 text-right text-white/30">
                    {row.without}
                  </td>
                  <td className="py-3.5 px-6 text-right text-white/80 font-medium">
                    {row.with_}
                  </td>
                </tr>
              ))}
              <tr className="bg-white/[0.04]">
                <td className="py-4 px-6 font-semibold">Total per month</td>
                <td className="py-4 px-6 text-right text-white/40 font-semibold">
                  $3,000+
                </td>
                <td className="py-4 px-6 text-right font-bold text-lg">
                  $49/mo
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto justify-center"
          >
            <input
              type="email"
              placeholder="Your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-5 py-3.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white/30 min-w-[260px]"
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all mt-3 sm:mt-0"
            >
              Get early access
            </button>
          </form>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-6 py-24 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/[0.02] border border-white/[0.08] overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-white/[0.04] transition-colors"
              >
                <span className="font-medium">{faq.q}</span>
                <span className="text-white/30 text-lg ml-4">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-sm text-white/50 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Your AI CMO
          <br />
          <span className="text-white/30">for real estate</span>
        </h2>
        <p className="text-lg text-white/40 max-w-md mx-auto mb-10">
          The only agent you need for lead response, SOI, content, and reviews
          — every channel, one Telegram thread.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto justify-center"
        >
          <input
            type="email"
            placeholder="Your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-5 py-3.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white/30 min-w-[240px]"
          />
          <button
            type="submit"
            className="px-8 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all"
          >
            Join early access
          </button>
        </form>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-6 py-12 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/25">
          <span>© 2026 RealEstateCMO. All rights reserved.</span>
          <div className="flex gap-6">
            <a
              href="mailto:hello@realestatecmo.ai"
              className="hover:text-white/50 transition-colors"
            >
              Contact
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ─── DATA ─── */

const agents = [
  {
    icon: "⚡",
    title: "Lead Response Agent",
    desc: "Forward a lead to your bot — it drafts and sends a personalized response from your Gmail in under 60 seconds. Never lose a lead to a faster agent again.",
    tag: "Highest ROI",
  },
  {
    icon: "🎂",
    title: "SOI Nurture Agent",
    desc: "Never miss a birthday, anniversary, or 6-month check-in. Your bot remembers every past client and drafts the perfect message when it's time.",
  },
  {
    icon: "📱",
    title: "Content Agent",
    desc: "Share a new listing — get 6 Instagram and Facebook post drafts in your voice. No more staring at a blank screen wondering what to post.",
  },
  {
    icon: "⭐",
    title: "Review Agent",
    desc: "New Google review appears — your bot alerts you and drafts a thoughtful response. Handle negative reviews in minutes, not days.",
  },
  {
    icon: "🌅",
    title: "Morning Briefing",
    desc: "7am every day: today's calendar, leads that need follow-up, SOI birthdays, and new reviews. Your entire day in one Telegram message.",
  },
  {
    icon: "🧠",
    title: "Learns Your Voice",
    desc: "Every correction makes the bot better. Over time, it writes exactly like you — your tone, your phrases, your style. No generic AI copy.",
    tag: "Adaptive",
  },
];

const comparisons = [
  { label: "Lead response assistant", without: "$15–25/hr", with_: "$0" },
  { label: "Social media manager", without: "$500–1,500/mo", with_: "$0" },
  { label: "CRM + reminders tool", without: "$50–100/mo", with_: "$0" },
  { label: "Review monitoring service", without: "$100–300/mo", with_: "$0" },
  { label: "Daily task planning", without: "30 min/day", with_: "$0" },
  { label: "Remembering SOI dates", without: "Impossible", with_: "Automatic" },
];

const faqs = [
  {
    q: "What exactly does the AI CMO do for my real estate business?",
    a: "It handles lead response, sphere of influence nurture, social media content, review monitoring, and morning briefings — all through Telegram. You stay in control: the AI drafts, you approve and send.",
  },
  {
    q: "How does the lead response work?",
    a: "You forward a lead inquiry to your bot in Telegram. The AI pulls in relevant listing data and drafts a personalized response. You review it, say 'send', and it goes out via your Gmail. Total time: under 60 seconds.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. It's a Telegram bot — the same app you already use for messaging. You connect your Gmail once (a 30-second Google OAuth), and that's it.",
  },
  {
    q: "What's the pricing?",
    a: "$49/month with a 1-day free trial when you first sign up. Cancel anytime — no lock-in, no long-term contracts.",
  },
  {
    q: "Is this only for Ontario agents?",
    a: "For launch, yes. We're building specifically for Ontario agents. TREB forms, RECO compliance, Land Transfer Tax — the AI understands Ontario real estate. We'll expand later.",
  },
  {
    q: "When does it launch?",
    a: "We're onboarding our first 10 Ontario agents now. Join the early access list and we'll reach out when your AI CMO is ready.",
  },
];
