export default {
  title: "Firestore CMS",
  description: "Firestore CMS - documentation",
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
    "Getting started",
    "Configuration"
    //{ name: "Configuration", menu: ["Options", "Types", "Collections"] }
  ]
};
