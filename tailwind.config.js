/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  plugins: {
    tailwindcss: { config: './tailwindcss-config.js' },
  },
  theme: {
    extend: {
      colors: {
        // transparent : "#001232"
      },
      width: {
        1000: "100rem",
      },
      textColor: {
        blackInput: "#23334f",
        Gray: "#dbe2fb",
        green: "#31d7a9",
        greyish: "#0d0d0d"
      },
      borderWidth: {
        '1': '1px',
      },
      colors: {
        Gray: "#dbe2fb",
      }
    },
  },
  plugins: [],
};