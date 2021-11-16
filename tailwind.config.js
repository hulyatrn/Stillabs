module.exports = {
  mode: "Jit",
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: {
          whitee: "#F7F9FB",
        },
        primary: {
          DEFAULT: "#006cff",
          light: "#3f8efc",
          extralight: "#e7f1ff",
          dark: "#023c8a",
          chart: "#a3caff",
          primaryy: "#356EF3",
        },
        red: {
          DEFAULT: "#db0e16",
          light: "#9C0A10",
          extralight: "#fdeeef",
          special: "#ffcacc",
        },
        green: {
          DEFAULT: "#2ec44d",
          light: "#088D23",
        },
        orange: {
          DEFAULT: "#f16d3c",
          dark: "#c13907",
        },
        yellow: {
          DEFAULT: "#FFF6EA",
        },
        purple: {
          DEFAULT: "#4f3cc9",
        },
        pink: {
          DEFAULT: "#f72585",
        },
        navy: {
          DEFAULT: "#011627",
        },
        gray: {
          DEFAULT: "#aeb4b8",
          dark: "#808a93",
          light: "#d6d9db",
          extralight: "#eceded",
        },
        special: {
          DEFAULT: "#eaf2ff",
          light: "#f5f9ff",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
