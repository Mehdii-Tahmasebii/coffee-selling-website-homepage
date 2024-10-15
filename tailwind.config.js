/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        normal: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Dana: "Dana",
        DanaDemiBold: "Dana DemiBold",
        DanaMedium: "Dana Medium",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
        MorabbaLight: "Morabba Light",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      spacing: {
        30: "7.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      backgroundImage: {
        "desktop--header--bg": "url(../images/headerBgDesktop.webp)",
        "mobile--header--bg": "url(../images/headerBgMobile.webp)",
        "desktop--product--bg": "url(../images/product-bg.png)",
        "category-left": "url(../images/categories/category-left.jpg)",
        "category-right": "url(../images/categories/category-right.jpg)",
      },
    },
    screens: {
      xs: "480px",

      sm: "640px",
      // => @media (min-width: 640px)

      md: "768px",
      // => @media (min-width: 768px)

      lg: "1024px",
      // => @media (min-width: 1024px)

      xl: "1280px",
      // => @media (min-width: 1280px)
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
