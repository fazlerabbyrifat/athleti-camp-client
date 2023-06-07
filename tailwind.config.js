/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#04db7e",

          secondary: "#5c319b",

          accent: "#6230cc",

          neutral: "#212a36",

          "base-100": "#faf9fb",

          info: "#5cc1e0",

          success: "#53d5bd",

          warning: "#efd667",

          error: "#f45d52",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
