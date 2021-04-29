/** @jsx jsx */
import { jsx, Container, Flex, Image } from "theme-ui";
import { Link } from "components/link";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/logo";
import icon from "assets/logo-icon.png";
import logoDark from "assets/logo-dark.png";
import logoLight from "assets/logo-light.png";

import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import menuItems from "./header.data";

export default function Header({ isHome, className }) {
  return (
    <DrawerProvider>
      {isHome && (
        <header sx={styles.header} className={className}>
          <Container sx={styles.container}>
            <Logo logo={logoDark} light={false} />
            <Logo logo={logoLight} light={true} />
            <Flex as="nav" sx={styles.nav}>
              {menuItems.map(({ path, label }, i) => (
                <ScrollLink
                  activeClass="active"
                  sx={styles.nav.navLink}
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  key={i}
                >
                  {label}
                </ScrollLink>
              ))}
            </Flex>
            <Link
              id="contact-us"
              path="/contact"
              ml={2}
              label="Contact Us"
              sx={styles.headerBtn}
              variant="buttons.primary"
            />
            <MobileDrawer isHome={true} />
          </Container>
        </header>
      )}
      {!isHome && (
        <header sx={styles.headerOther} className={className}>
          <Container sx={styles.container}>
            <Logo logo={logoDark} light={false} />
            {/* <Logo logo={logoLight} light={true} /> */}
            <Flex as="nav" sx={styles.nav}>
              {menuItems.map(({ path, label }, i) => (
                <Link sx={styles.nav.navLink} href={`/#${path}`} key={i}>
                  {label}
                </Link>
              ))}
            </Flex>
            <Link
              id="contact-us"
              path="/contact"
              ml={2}
              label="Contact Us"
              sx={styles.headerBtn}
              variant="buttons.primary"
            />
            <MobileDrawer isHome={false} />
          </Container>
        </header>
      )}
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    backgroundColor: "rgba(0,0,0,0)",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    border: "2px solid",
    borderColor: "primary",
    color: "primary",
    padding: "8px 24px",
    display: ["none", null, null, null, "inline-block"],
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
  },
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: "30px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    nav: {
      fontWeight: 700,
      color: "white",
    },
    a: {
      //   fontWeight: 700,
    },
    "#logo-dark": {
      display: "none",
    },
    "#logo-light": {
      display: "block",
      mt: ["10px"],
      // fontWeight: 600,
      // color: "white",
      // fontSize: ["24px"],
      // fontFamily: "Champagne & Limousines",
    },
    "#contact-us": {
      fontWeight: 700,
      color: "white",
      borderColor: "white",
    },
    "#drawer-handler": {
      color: "white",
    },

    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "10px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      nav: {
        color: "#02073E",
        fontWeight: "400",
      },
      "#logo-dark": {
        display: "block",
        mt: ["10px"],
      },
      "#logo-light": {
        display: "none",
      },
      "#contact-us": {
        fontWeight: "bold",
        color: "primary",
        borderColor: "primary",
      },
      "#drawer-handler": {
        color: "primary",
      },
    },
  },
  headerOther: {
    color: "text_white",
    fontWeight: "normal",
    py: "30px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    nav: {
      fontWeight: 700,
      color: "white",
    },
    backgroundColor: "background",
    color: "text",
    py: "10px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    nav: {
      color: "#02073E",
      fontWeight: "400",
    },
    "#logo-dark": {
      display: "block",
      mt: ["10px"],
    },
    "#logo-light": {
      display: "none",
    },
    "#contact-us": {
      fontWeight: "bold",
      color: "primary",
      borderColor: "primary",
    },
    "#drawer-handler": {
      color: "primary",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: [null, null, null, null, null, null, "1390px"],
    "@media screen and (max-width: 960px)": {
      justifyContent: "space-between",
    },
    justifyContent: "center",
  },
  containerOther: {
    display: "flex",
    alignItems: "center",
    width: [null, null, null, null, null, null, "1390px"],
    "@media screen and (max-width: 960px)": {
      justifyContent: "space-between",
    },
    justifyContent: "center",
  },
  nav: {
    mx: "auto",
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
    marginRight: "10%",
    navLink: {
      fontSize: "16px",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "48px",
      transition: "500ms",
      ":last-child": {
        mr: "0",
      },
      "&:hover, &.active": {
        color: "primary",
      },
    },
  },
  logo: {
    // width:["60px", "100px"],
    width: ["15%"],
    // mt: ["10px"],
    ml: ["42%"],
  },
};
