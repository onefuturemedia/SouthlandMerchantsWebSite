import React from "react";
import { Box, Container, Grid, Heading, Image } from "theme-ui";

import VideoBanner from "components/video-banner";
import thumb from "assets/videos/thumbnail.png";

const Banner = () => {
  return (
    <Box as="section" sx={styles.banner} id="banner">
      <VideoBanner />
      <Image src={thumb} alt="" sx={styles.image} />
      <Container id="container" sx={styles.container}>
        <Grid id="grid" sx={styles.grid}>
          <Box id="box" sx={styles.content}>
            <Heading as="h3">
              Connecting coffee growers with coffee lovers
            </Heading>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    // pt: ["110px", null, null, null, "150px", "200px"],
    // pb: ["50px", null, null, null, "60px", null, "0"],
    "@media screen and (min-height: 300px)": {
      height: "300px",
    },
    "@media screen and (min-height: 350px)": {
      height: "350px",
    },
    "@media screen and (min-height: 400px)": {
      height: "400px",
    },
    "@media screen and (min-height: 450px)": {
      height: "450px",
    },
    "@media screen and (min-height: 500px)": {
      height: "500px",
    },
    "@media screen and (min-height: 550px)": {
      height: "550px",
    },
    "@media screen and (min-height: 600px)": {
      height: "600px",
    },
    "@media screen and (min-height: 640px)": {
      height: "640px",
    },
    "@media screen and (min-height: 700px)": {
      height: "700px",
    },
    "@media screen and (min-height: 730px)": {
      height: "730px",
    },
    "@media screen and (min-height: 810px)": {
      height: "810px",
    },
    "@media screen and (min-height: 860px)": {
      height: "860px",
    },
    "@media screen and (min-height: 900px)": {
      height: "900px",
    },
    "@media screen and (min-height: 950px)": {
      height: "950px",
    },
    "@media screen and (min-height: 1024px)": {
      height: "1024px",
    },
    "@media screen and (min-height: 1048px)": {
      height: "1048px",
    },
    "@media screen and (min-height: 1100px)": {
      height: "1100px",
    },
    "@media screen and (min-height: 1150px)": {
      height: "1150px",
    },
    "@media screen and (min-height: 1200px)": {
      height: "1200px",
    },
    "@media screen and (min-height: 1250px)": {
      height: "1250px",
    },
    "@media screen and (min-height: 1300px)": {
      height: "1300px",
    },
    "@media screen and (min-height: 1360px)": {
      height: "1360px",
    },
    // background:
    //   "linear-gradient(190deg, #ede0d6 0%, #B2957F 35%, #B2957F 60%,#ede0d6 90%)",
    backgroundColor: "heading_alt",
    overflow: "hidden",
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],
    zIndex: "2",
    position: "relative",
    ml: [null, null, null, "10%", "10%", "10%", "10%"],
    mt: ["50%", null, "0", "0", "0", "0", "0"],
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, "1fr 1fr", "1fr 1fr"],
    gridGap: "0",
  },
  content: {
    h3: {
      color: "white",
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["15px", null, null, null, "20px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, "90%", "100%", "100%"],
      fontSize: [6, 7, null, "36px", null, "55px", 9],
      marginTop: ["20px", "30px", "300px"],
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ["26px", null, null, null, 2.33],
      color: "text",
      mb: ["20px", null, null, null, null, "30px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, null, null, "410px"],
      br: {
        display: ["none", null, null, null, "inherit"],
      },
    },
  },
  form: {
    mb: ["30px", null, null, null, null, "60px"],
    display: ["flex"],
    input: {
      borderRadius: ["4px"],
      backgroundColor: "#fff",
      width: ["240px", null, null, null, "315px", null, "375px"],
      height: ["45px", null, null, "55px", null, null, "65px"],
      padding: ["0 15px", null, null, "0 25px"],
      fontSize: [1, null, null, 2],
      border: "none",
      outline: "none",
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
    },
    button: {
      fontSize: [1, null, null, null, 2, "20px"],
      borderRadius: ["4px"],
      padding: ["0 15px"],
      ml: ["10px"],
      width: ["auto", null, null, null, "180px"],
    },
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  partner: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    mb: ["40px"],
    "> div + div": {
      ml: ["10px", null, null, "20px", null, "30px"],
    },
    img: {
      display: "flex",
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: "#566272",
      lineHeight: [1],
      opacity: 0.6,
      display: "block",
      mb: ["20px", null, null, null, "0px"],
      mr: [null, null, null, null, "20px"],
      flex: ["0 0 100%", null, null, null, "0 0 auto"],
    },
  },
};
