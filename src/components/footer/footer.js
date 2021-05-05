/** @jsx jsx */
import { jsx, Box, Text, Container, Grid } from "theme-ui";
import { FaInstagram, FaFacebookSquare, FaMedium } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer
      sx={{
        variant: "layout.footer",
      }}
    >
      <Container
        className="footer-container"
        sx={{
          variant: "layout.toolbar",
          justifyContent: ["center", null, null, "space-between"],
          flexDirection: ["column", null, null, null, "column"],
          paddingTop: [0],
          paddingBottom: [0],
          maxWidth: [null, null, null, null, "90%"],
        }}
      >
        <Container
          className="footer-upper-container"
          sx={{
            variant: "layout.toolbar",
            justifyContent: ["center", null, null, "space-between"],
            flexDirection: ["row", null, null, null, "row"],
            py: [10, 20],
          }}
        >
          <Box sx={styles.left} className="footer-box">
            <Grid sx={{ gridGap: "0.1em" }} className="footer-grid">
              {/* <Text as="p">
                Adelaide SA, Australia - info@southlandmerchants.com.au - +61
                (0) 409 007 565
              </Text> */}
              <Text as="p">
                +61 (0) 409 007 565 <br /> info@southlandmerchants.com.au <br />
                Adelaide SA, Australia
              </Text>
              {/* <Text as="p"><b>Phone:</b> +61 (0) 409 007 565/+61 (0) 452 142 412</Text>
              <Text as="p">E-mail: info@southlandmerchants.com.au</Text>
              <Text as="p">Adelaide SA, Australia</Text> */}
            </Grid>
          </Box>
          {/* <Box sx={styles.middle}>
            <Link path="/">
              <Image
                src={icon}
                alt="southland merchants logo"
                sx={styles.logo}
              />
            </Link>
          </Box> */}
          <Box sx={styles.right}>
            <a href="/contact">
              <RiMailLine />
            </a>
            <a href="https://www.instagram.com/southlandmerchants/">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/southlandmerchants/">
              <FaFacebookSquare />
            </a>
            <a href="https://medium.com/southlandmerchants">
              <FaMedium />
            </a>
          </Box>
        </Container>
        <Text as="p" sx={styles.footerFooter} className="footer-made-by">
          &copy; {new Date().getFullYear()} All right reserved - Design &
          Developed by On Future Media.
        </Text>
      </Container>
    </footer>
  );
}

const styles = {
  left: {
    display: ["none", "none", "flex", null, null, null, "flex"],
    flexDirection: ["column", null, "row"],
    alignItems: "center",
    p: {
      fontSize: [0, 1],
      color: "black",
      opacity: 0.6,
      mt: ["10px", null, "0"],
    },
  },
  middle: {
    display: [null, null, null, null, "flex"],
    flexDirection: ["column", null, "row"],
    alignItems: "center",
    p: {
      fontSize: [0, 1],
      lineHeight: ["1em", "1.2em"],
      color: "black",
      opacity: 1,
      fontWeight: 500,
      mt: ["10px", null, "0"],
    },
  },
  right: {
    display: [null, null, null, null, "flex"],
    fontSize: 6,
    alignItems: "center",
    color: "black",
    a: {
      transition: "500ms",
      "&:hover": {
        color: "primary",
      },
      svg: {
        width: [
          "0.8em",
          "1em",
          "1em",
          "1em",
          "1em",
          "1em",
          "1em",
          "1em",
          "1em",
          "1em",
        ],
      },
    },
    "a+a": {
      marginLeft: "10px",
    },
    navLink: {
      fontSize: "13px",
      color: "#02073E",
      fontWeight: "400",
      cursor: "pointer",
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
    width: ["50px", "50px", "90px"],
    mr: ["80px", "100px", "90px"],
    mt: ["15px", "5px", null, null, null, null, null],
  },
  footerFooter: {
    fontSize: ["10px", "10px", "10px"],
    color: "black",
  },
};
