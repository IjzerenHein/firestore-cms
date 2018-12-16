export default {
  title: "Firebase CMS",
  description: "Firebase CMS - documentation",
  themeConfig: {
    colors: {
      primary: "tomato"
    },
    styles: {
      h1: {
        margin: ["30px 0 20px", "60px 0 20px", "40px 0 30px"],
        fontFamily: '"Poppins", serif',
        fontWeight: 400,
        fontSize: [44, 44, 64],
        letterSpacing: "-0.02em"
      }
    }
  },
  src: "./docz",
  dest: "./docz-build",
  menu: [
    "Home",
    "Configuration"
    //{ name: "Configuration", menu: ["Options", "Types", "Collections"] }
  ]
};
