/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#333333",
          200: "#222222",
          300: "#111111",
        },
        primary: "#1E90FF",
        danger: "rgba(255, 0, 0, 0.5)",
        borderColor: "#2a2626",
        inputBg: "#3E3C3E",
        textGray: "rgba(255, 255, 255, 0.43)",
      },
      spacing: {
        750: "750px",
        970: "970px",
        1170: "1170px",
      },
    },
  },
  plugins: [],
};
