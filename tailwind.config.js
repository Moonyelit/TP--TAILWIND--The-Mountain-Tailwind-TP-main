/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "#22d3ee" ,
          red: "#e11d48",
        },
        neutral: {
          "off-white": "hsl(36, 100%, 99%)",
          "dark-grayish-blue": "hsl(236, 13%, 42%)",
          "grayish-blue": "hsl(233, 8%, 79%)",
          "very-dark-blue": "hsl(240, 100%, 5%)",
        },
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        paragraph: "15px",
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};