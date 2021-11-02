module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    fontFamily: {
      sans: ["Merriweather", "system-ui", "sans-serif"],
    },
    extend: {
      // fontSize: {
      //   xxs: "0.625rem",
      // },
      maxHeight: {
        "48": "12rem",
        "80vh": "80vh",
        "90vh": "90vh",
        none: "none",
      },
    },
  },
  variants: {},
  plugins: [],
}
