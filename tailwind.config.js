/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0ea5e9",
        scondary: "#64748b",
        dark: "#0f172a",
        form: "#e2e8f0",
        tailwind: "#22d3ee",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
