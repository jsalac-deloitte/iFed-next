/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-meta":
          "url('../public/assets/images/admin/metadata/mobile_meta.png')",
        "tablet-meta":
          "url('../public/assets/images/admin/metadata/tablet_meta.png')",
        "desktop-meta":
          "url('../public/assets/images/admin/metadata/desktop_meta.png')",
      },
    },
  },
  plugins: [],
};
