import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nexvia-black": "#000000",
        "nexvia-dark": "#0A0A0A",
        "nexvia-gray-900": "#111111",
        "nexvia-gray-800": "#1a1a1a",
        "nexvia-gray-700": "#242424",
        "nexvia-gray-600": "#374151",
        "nexvia-gray-500": "#6B7280",
        "nexvia-gray-400": "#888888",
        "nexvia-gray-300": "#9ca3af",
        "nexvia-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "sparkle": "sparkle 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotateX(15deg) rotateY(-8deg)" },
          "50%": { transform: "translateY(-16px) rotateX(15deg) rotateY(-8deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { "box-shadow": "0 0 20px rgba(255,255,255,0.05), inset 0 0 20px rgba(255,255,255,0.02)" },
          "50%": { "box-shadow": "0 0 40px rgba(255,255,255,0.12), inset 0 0 30px rgba(255,255,255,0.05)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.8) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1.2) rotate(15deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;

