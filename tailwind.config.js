/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background": "var(--background-color)",
        "copy": "var(--copy-color)",
        "accent": "var(--accent-color)",
        "accent-off": "var(--accent-off-color)",
        // primary and secondary
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
      }
    },
  },
  plugins: [],
};
