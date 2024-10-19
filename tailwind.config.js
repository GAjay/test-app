/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/img/hero-pattern.svg')",
          'footer-texture': "url('/public/banner.jpg')",
        },
        keyframes: {
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden",
            },
            "100%": {
              width: "100%",
            },
          },
          blink: {
            "50%": {
              borderColor: "transparent",
            },
            "100%": {
              borderColor: "white",
            },
          },
        },
        animation: {
          "loop-scroll": " loop-scroll 50s linear infinite",
          typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    plugins: [],
  };
  