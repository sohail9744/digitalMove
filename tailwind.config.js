/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins"],
        quickSand: ["Quicksand"],
        roboto: ["Roboto"],
      },
      colors: {
        customColor: "#afcfda", // Replace with your desired HEX color
      },
    },
  },
  plugins: [],
};
