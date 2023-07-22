/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
  plugins: [],
};
