import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  preload: false, // mono font less critical
});

export const metadata: Metadata = {
  title: "Sambel Code — Fullstack Developer & Visual Editor",
  description:
    "Portfolio of Sambel Code, a fullstack developer and visual editor based in Indonesia.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  // Improve SEO & sharing
  openGraph: {
    title: "Sambel Code — Fullstack Developer & Visual Editor",
    description: "Fullstack developer and visual editor based in Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to image CDN for faster LCP */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
      </head>
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable} font-sans bg-[#080808] text-[#c8c8c8] antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
