"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import MusicPlayer from "@/components/ui/MusicPlayer";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 h-[68px] flex items-center justify-between px-6 md:px-12 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/[0.07] bg-[rgba(8,8,8,0.92)] backdrop-blur-xl"
            : "border-transparent bg-[rgba(8,8,8,0.6)] backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="font-display text-[20px] md:text-[22px] tracking-[0.12em] text-white z-50 relative"
        >
          {siteConfig.name}
          <span className="text-[#c9a84c]">.</span>
          {siteConfig.nameAccent}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map(({ href, label }) => (
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

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
        >
          <span
            className={`block w-6 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7.5px]" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#080808]/95 backdrop-blur-xl"
          onClick={closeMenu}
        />

        {/* Menu content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-500 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {/* Nav links */}
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="font-display text-[48px] sm:text-[56px] tracking-[0.05em] text-white/30 hover:text-white transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {label}
            </Link>
          ))}

          {/* Divider */}
          <div className="w-12 h-px bg-white/10 my-6" />

          {/* Hire Me button */}
          <Link
            href="#contact"
            onClick={closeMenu}
            className="px-8 py-3.5 bg-[#c9a84c] text-[#080808] font-bold text-[13px] tracking-[0.12em] uppercase rounded-sm hover:bg-[#dbb95a] transition-colors mb-4"
          >
            Hire Me
          </Link>

          {/* Music player */}
          <MusicPlayer />

          {/* Socials */}
          <div className="flex gap-6 mt-6">
            {Object.entries(siteConfig.socials).map(([platform, href]) => (
              <Link
                key={platform}
                href={href}
                className="font-mono text-[10px] tracking-[0.12em] text-[#555] hover:text-[#c9a84c] transition-colors capitalize"
              >
                {platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}