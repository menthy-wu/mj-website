/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "green-diamond": "url('/greenDiamond.svg')",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        abril: ["var(--font-abril)"],
        source: ["SOURCE", "sans-serif"],
      },
      colors: {
        mj: {
          darkerpink: "#BB6765",
          pink: "#FFA69E",
          green: "#131D1D",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
};
