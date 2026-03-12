import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-12 border-t border-white/[0.07] bg-[#080808] flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="font-mono text-[10px] tracking-[0.08em] text-[#555]">
        © {new Date().getFullYear()} Midnight Professional — All rights reserved.
      </p>
      <div className="flex gap-6">
        {Object.entries(siteConfig.socials).map(([platform, href]) => (
          <Link
            key={platform}
            href={href}
            className="font-mono text-[10px] tracking-[0.1em] text-[#555] hover:text-[#c9a84c] transition-colors capitalize"
          >
            {platform}
          </Link>
        ))}
      </div>
    </footer>
  );
}
