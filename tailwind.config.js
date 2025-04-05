/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // darkblack: "#020816",
        darkblack: "#000000",
        darkbackground: "#1d1d1f",
        // primary: "#0088CC",
        primary: "#20c6c1",
        primary2: "#4fa8a5",
      },
      backgroundImage: {
        footerBackground:
          "radial-gradient(circle, rgba(32,198,193,0.20634191176470584) 0%, rgba(2,8,22,1) 80%)",
        background:
          "radial-gradient(circle, rgba(32,198,193,0.20634191176470584) 0%, rgba(2,8,22,1) 80%)",
        // "radial-gradient(circle, rgba(32,198,193,1) 0%, rgba(2,8,22,1) 80%);",
      },
    },
  },
  plugins: [],
};
