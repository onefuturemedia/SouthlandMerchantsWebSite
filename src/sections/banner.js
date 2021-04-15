import React from "react";
import {
  Box,
  Container,
  Grid,
  // Button,
  // Input,
  Heading,
  // Text,
  // Image as Img,
} from "theme-ui";
// import { useStaticQuery, graphql } from "gatsby";

// import Image from "components/image";
import VideoBanner from "components/video-banner";

// import img1 from "assets/partner-1-1.png";
// import img2 from "assets/partner-1-2.png";
// import img3 from "assets/partner-1-3.png";
import video from "assets/videos/video.mp4";

const Banner = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "banner-image-1-1.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 958) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <Box as="section" sx={styles.banner} id="banner">
      <VideoBanner src={video} />
      <Container id="container" sx={styles.container}>
        <Grid id="grid" sx={styles.grid}>
          <Box id="box" sx={styles.content}>
            <Heading as="h3">
              Connecting coffee growers with coffee lovers
            </Heading>
            {/* <Text as="p">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </Text> */}
            {/* <Box as="form" sx={styles.form}>
              <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
                subscribe
              </Box>
              <Input
                name="subscribe"
                id="subscribe"
                placeholder="Subscribe newsletter"
                sx={styles.form.input}
              />
              <Button type="submit" sx={styles.form.button}>
                Subscribe
              </Button>
            </Box> */}
            {/* <Box sx={styles.partner}>
              <Text as="span">Key Partners:</Text>
              <Box as="div">
                <Img src={img1} alt="" />
              </Box>
              <Box as="div">
                <Img src={img2} alt="" />
              </Box>
              <Box as="div">
                <Img src={img3} alt="" />
              </Box>
            </Box> */}
          </Box>
          {/* <Box sx={styles.image}>
            <Image src={data.placeholderImage.childImageSharp.fluid} alt="" />
          </Box> */}
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
    backgroundColor: "#F6F8FB",
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
      fontSize: [6, null, null, "36px", null, "55px", 9],
      marginTop: "30%",
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ["26px", null, null, null, 2.33],
      color: "text_secondary",
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
    img: {
      display: "flex",
      mixBlendMode: "darken",
      position: "relative",
      top: ["0", null, null, null, null, "-40px"],
      maxWidth: ["100%", null, null, null, null, null, "none"],
    },
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
