import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0A0F1E",
          secondary: "#0D1526",
          surface: "#111827",
          elevated: "#1A2235",
        },
        brand: {
          primary: "#1E40AF",
          secondary: "#3B82F6",
          tertiary: "#60A5FA",
          dark: "#1E3A8A",
        },
        content: {
          primary: "#F1F5F9",
          secondary: "#94A3B8",
          tertiary: "#64748B",
          accent: "#60A5FA",
        },
        border: {
          subtle: "#1E293B",
          default: "#334155",
          strong: "#475569",
        },
        semantic: {
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.15)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(59, 130, 246, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
