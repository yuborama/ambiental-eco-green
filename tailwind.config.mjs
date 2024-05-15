/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // o 'media' o 'class'
  theme: {
    screens: {
      xsm: { max: "425px" },
      sm: { max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { max: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { max: "1440px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
    },
    extend: {
      colors: {
        button: "#2A87F4",
        light: {
          primary: "#80bf40",
        },
        dark: {
          primary: "#80bf40",
        },
      },
    },
  },
  plugins: [],
};
