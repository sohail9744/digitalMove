/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "425px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "425px", max: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "768px", max: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1024px", max: "1440px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        popins: ["Poppins"],
        quickSand: ["Quicksand"],
        roboto: ["Roboto"],
        Signika: ["Signika Negative"],
        materialicons: ["'Material Icons'"],
      },
      fontVariationSettings: {
        "material-symbols-outlined":
          "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48",
      },
      colors: {
        customColor: "#afcfda", // Replace with your desired HEX color
      },
    },
  },
  plugins: [require("daisyui")],
};
