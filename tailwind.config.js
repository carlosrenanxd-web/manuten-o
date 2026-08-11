/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#132A46",
          50: "#EAF0F7",
          100: "#CBDAEA",
          200: "#9EBAD9",
          300: "#6E97C4",
          400: "#41739F",
          500: "#254E75",
          600: "#1B3B5C",
          700: "#132A46",
          800: "#0D1E33",
          900: "#081321",
        },
        signal: {
          DEFAULT: "#00B4C8",
          50: "#E0FBFD",
          100: "#B3F2F7",
          400: "#22C7D6",
          500: "#00B4C8",
          600: "#0091A3",
        },
        amber: {
          DEFAULT: "#F2A93C",
          500: "#F2A93C",
          600: "#D68F22",
        },
        paper: "#F5F7FA",
        ink: "#0F1B2D",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(#1B3B5C12 1px, transparent 1px), linear-gradient(90deg, #1B3B5C12 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
