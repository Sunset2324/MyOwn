import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        gold: {
          DEFAULT: "#c9a84c",
          dim: "rgba(201,168,76,0.12)",
          glow: "rgba(201,168,76,0.25)",
        },
        surface: {
          DEFAULT: "#111111",
          2: "#181818",
        },
      },
      animation: {
        "bar-1": "bar1 0.9s ease-in-out infinite",
        "bar-2": "bar2 0.9s ease-in-out infinite 0.15s",
        "bar-3": "bar3 0.9s ease-in-out infinite 0.05s",
        "bar-4": "bar4 0.9s ease-in-out infinite 0.2s",
        "bar-5": "bar5 0.9s ease-in-out infinite 0.1s",
        "orb-float": "orbFloat 18s ease-in-out infinite",
        "orb-float-reverse": "orbFloat 24s ease-in-out infinite reverse",
        "fade-up": "fadeUp 0.8s ease forwards",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "fill-bar": "fillBar 1.5s ease forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        bar1: { "0%,100%": { height: "4px" }, "50%": { height: "14px" } },
        bar2: { "0%,100%": { height: "8px" }, "50%": { height: "4px" } },
        bar3: { "0%,100%": { height: "12px" }, "50%": { height: "6px" } },
        bar4: { "0%,100%": { height: "5px" }, "50%": { height: "13px" } },
        bar5: { "0%,100%": { height: "9px" }, "50%": { height: "4px" } },
        orbFloat: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(20px,-30px) scale(1.05)" },
          "66%": { transform: "translate(-15px,20px) scale(0.95)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(34,197,94,0.4)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 0 6px rgba(34,197,94,0)" },
        },
        fillBar: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
