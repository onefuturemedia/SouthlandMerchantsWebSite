export default {
  // example colors with dark mode

  // paleta da marca
  // marrom escuro:  #513b2d
  // marrom claro: #C9BFB5
  // verde da logo: #8a966e
  // Azul: #3c435e
  // branco #bab9be (meio cinza, do manual da marca)
  // branco: #eeeeef (mais claro que o da marca)

  breakpoints: ["376px", "576px", "768px", "992px", "1200px", "1600px"],
  colors: {
    text: "#130f0b", // body color and primary color
    text_secondary: "#513b2d", // secondary body color
    heading: "#271e17", // primary heading color
    heading_alt: "#3c435e",
    heading_alt_opaque: "rgb(60, 67, 94, 0.5)", //same as "#3c435e", with opacity
    heading_secondary: "#130f0b", // heading color
    background: "#eeeeef", // body background color
    background_dark: "#513b2d", // secondary background color
    background_alt: "#C9BFB5", // secondary background color
    background_lighter: "#f8f8f9", // secondary background color
    border_color: "#C9BFB5", // border color
    primary: "#513b2d", // primary button and link color
    secondary: "#3b2e23", // secondary color - can be used for hover states
    black: "#130f0b", // black color
    gray: "#F8FAFC",
    logo_green: "#8a966e",
    logo_green_dark: "#525A42",
    muted: "#7B8188", // muted color
    accent: "#4ca64c", // a contrast color for emphasizing UI
  },
  fonts: {
    body: "Avenir Next",
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    // heading: "Avenir Next",
    special: "Roboto",
    heading: "Avenir Next",
    monospace: "Menlo, monospace",
  },
  fontSizes: [15, 15, 16, 18, 20, 21, 30, 36, 48, 64],
  fontWeights: {
    body: "normal",
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: "30px",
    heading: "50px",
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px",
  },
  // space: [0, 4, 8, 16, 32, 64],
  sizes: {
    container: ["1230px"],
  },
  // variants can use custom, user-defined names
  layout: {
    container: {
      px: ["15px", null, null, "30px"],
    },
    header: {
      color: "#130f0b",
      fontWeight: "normal",
      py: 3,
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      // justifyContent: 'space-between',
    },
    main: {},
    footer: {
      backgroundColor: "background_secondary",
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
      letterSpacing: "heading",
      color: "heading",
    },
    heroPrimary: {
      fontSize: [5, 55],
      fontWeight: "normal",
      lineHeight: ["40px", "80px"],
      letterSpacing: "-1px",
      textAlign: ["center", "left"],
    },
    title: {
      variant: "text.heading",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: "30px",
      color: "#0F2137",
    },
    heroSecondary: {
      color: "text_secondary",
      lineHeight: ["30px", "42px"],
      letterSpacing: "0.1em",
      textAlign: ["center", "left"],
    },
    lead: {
      fontSize: 40,
      fontFamily: "Avenir Next",
      fontWeight: "500",
      lineHeight: "60px",
      letterSpacing: "-1.5px",
      color: "#0F2137",
    },
    muted: {
      lineHeight: "26px",
      color: "muted",
    },
    secondary: {
      fontWeight: 500,
      color: "#00A99D",
      lineHeight: "40px",
    },
  },
  links: {
    bold: {
      fontWeight: "bold",
    },
    nav: {
      display: ["none", null, "inline-block"],
      p: 2,
    },
    footer: {
      display: "block",
      px: 0,
      color: "inherit",
      textDecoration: "none",
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, "none"],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    primary: {
      fontWeight: "bold",
      color: "white",
      bg: "primary",
      cursor: "pointer",
      transition: "500ms",
      fontSize: 2,
      "&:hover": {
        bg: "secondary",
      },
    },
  },

  blockTitle: {
    marginBottom: [45, null, null, null, 70],
    p: {
      color: "primary",
      fontSize: [0, null, null, null, 3],
      lineHeight: 1,
      marginBottom: [10, null, null, null, 10],
    },
    h2: {
      color: "black",
      fontWeight: "bold",
      fontSize: [5, null, null, null, "32px", null, 7],
      lineHeight: [1.24, null, null, null, 1.83],
      letterSpacing: ["-1px", null, null, null, "-1.5px"],
    },
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      WebkitFontSmoothing: "antialiased",
      "@media(max-width: 479px)": {
        WebkitTextSizeAdjust: "100%",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
      button: {
        cursor: "pointer",
      },
    },
    a: {
      cursor: "pointer",
      textDecoration: "none",
    },
    button: {
      cursor: "pointer",
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "#D9E0E7",
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: "none",
    },
    srOnly: {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      position: "absolute !important",
      width: "1px !important",
      whiteSpace: "nowrap !important",
    },
  },
};
