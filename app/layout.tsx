import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sambel CODE -Portfolio",
  description:
    "Fullstack Developer & Visual Editor. Crafting scalable web applications and cinematic visual experiences.",
  keywords: ["fullstack", "developer", "photo editor", "video editor", "portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable} font-sans bg-[#080808] text-[#c8c8c8] antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
