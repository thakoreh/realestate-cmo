import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "RealEstateCMO — Your AI Chief Marketing Officer",
  description:
    "AI CMO for Ontario real estate agents. Lead response, SOI nurture, social posts, morning briefings — all from Telegram. $49/mo, 1-day free trial.",
  openGraph: {
    title: "RealEstateCMO — AI CMO for Real Estate Agents",
    description: "24/7 AI agent that handles leads, SOI, content, and reviews — right in Telegram.",
    url: "https://realestatecmo.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
