/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   // sm: "640px",
    //   // // => @media (min-width: 640px) { ... }

    //   // md: "1024px",
    //   // // => @media (min-width: 1024px) { ... }

    //   // lg: "1280px",
    //   // // => @media (min-width: 1280px) { ... }

    //   sm: { min: "319px", max: "425px" },
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   md: { min: "425px", max: "768px" },
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   lg: { min: "768px" },
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   // xl: { min: "1024px", max: "1440px" },
    //   // // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   // "2xl": { min: "1536px" },
    //   // // => @media (min-width: 1536px) { ... }
    // },
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 1024px) { ... }

      lg: "1024px",
      // => @media (min-width: 1280px) { ... }
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
        customBlue: "#1976d2",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
