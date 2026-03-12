import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[100px] pb-16 px-6 md:px-12 overflow-hidden">
      <div className="w-full max-w-4xl">
        {/* Badge */}
        {siteConfig.availableForWork && (
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-white/[0.07] rounded-sm bg-[#111] backdrop-blur-sm animate-[fadeUp_0.8s_ease_forwards] opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.12em] text-[#555]">
              AVAILABLE FOR PROJECTS
            </span>
          </div>
        )}

        {/* Headline */}
        <h1
          className="font-display leading-[0.92] tracking-[0.02em] text-white mb-6 md:mb-8 animate-[fadeUp_0.8s_ease_forwards] opacity-0"
          style={{ fontSize: "clamp(52px, 10vw, 140px)", animationDelay: "0.25s" }}
        >
          FULL<span className="text-[#c9a84c]">STACK</span>
          <br />
          <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
            DEVELOPER
          </span>
          <br />
          &amp; VISUAL EDITOR
        </h1>

        {/* Description */}
        <p
          className="text-[15px] md:text-[16px] leading-[1.75] text-[#555] max-w-[520px] mb-10 md:mb-12 animate-[fadeUp_0.8s_ease_forwards] opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          {siteConfig.description}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 animate-[fadeUp_0.8s_ease_forwards] opacity-0"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="#work"
            className="px-8 py-4 bg-[#c9a84c] text-[#080808] font-bold text-[12px] tracking-[0.1em] uppercase rounded-sm hover:bg-[#dbb95a] hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] transition-all text-center"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-white/10 text-[#c8c8c8] text-[12px] tracking-[0.1em] uppercase rounded-sm hover:border-white/30 hover:text-white transition-all text-center"
          >
            My Story
          </a>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="absolute bottom-10 right-12 hidden md:flex flex-col items-center gap-4 opacity-30">
        <span className="font-mono text-[9px] tracking-[0.2em] [writing-mode:vertical-rl]">SCROLL DOWN</span>
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white" />
      </div>
    </section>
  );
}
