"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";
import MusicPlayer from "@/components/ui/MusicPlayer";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 h-[72px] flex items-center justify-between px-12 border-b border-white/[0.07] bg-[rgba(8,8,8,0.75)] backdrop-blur-xl">
      {/* Logo */}
      <Link href="/" className="font-display text-[22px] tracking-[0.12em] text-white">
        {siteConfig.name}
        <span className="text-[#c9a84c]">.</span>
        {siteConfig.nameAccent}
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-10">
        {[
          { href: "#about", label: "About" },
          { href: "#work", label: "Work" },
          { href: "#services", label: "Services" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-[12px] font-medium tracking-[0.1em] uppercase text-[#555] hover:text-white transition-colors"
          >
            {label}
          </Link>
        ))}

        <MusicPlayer />

        <Link
          href="#contact"
          className="px-5 py-2.5 bg-[#c9a84c] text-[#080808] font-semibold text-[11px] tracking-[0.1em] uppercase rounded-sm hover:bg-[#dbb95a] transition-colors"
        >
          Hire Me
        </Link>
      </div>

      {/* Mobile menu placeholder */}
      <button className="md:hidden text-white p-2">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>
  );
}
