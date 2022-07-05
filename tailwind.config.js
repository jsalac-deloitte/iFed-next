/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-skill":
          "url('../public/assets/images/admin/metadata/mobile_meta.png')",
        "tablet-skill":
          "url('../public/assets/images/admin/metadata/tablet_meta.png')",
        "desktop-skill":
          "url('../public/assets/images/admin/metadata/desktop_meta.png')",
      },
      // colors: {
      //   color1: "#393939",
      //   color2: "#BBBCBC",
      //   deloitteGreen: "#198754",
      //   lineGray: "#707377",
      // },
    },
  },
  plugins: [],
};
