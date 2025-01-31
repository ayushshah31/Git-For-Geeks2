/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": "50%",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
      },
      fontFamily: {
        gothic: ["Franklin Gothic Medium", "Georgia", "sans-serif"],
        gothicBold: ["Franklin Gothic Heavy", "Georgia"],
      },
      fontSize: {
        xl: [
          "24px",
          {
            lineHeight: "27.21px",
          },
        ],
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        darkOlive: "#ACC2A8",
        white: "#FFFFFF",
        cream: "#FEF5ED",
        lilOlive: "#D3E4CD",
        brightOlive: "#ADC2A9",
        icon1: "#D1D184",
        icon2: "#525C52",
        icon3: "#DBFBB1",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  variants: {
    scrollbar: ["rounded"],
  },
};
