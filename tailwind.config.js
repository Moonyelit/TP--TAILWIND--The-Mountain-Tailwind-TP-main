/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "#22d3ee",
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
        "Mountain-King": "url('/images/bg_header.jpg')",
        "About-me": "url('/images/bg_nuage.jpg')",
        "My-history": "url('/images/bg_appareil_photo.jpg')",
      },
    },
  },
  plugins: [],
};
