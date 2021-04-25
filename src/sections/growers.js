import React from "react";
import { Box, Container, Grid, Heading, Text, Image } from "theme-ui";
import { Link } from "components/link";

import img1 from "assets/growers-home.jpg";

const Growers = () => {
  return (
    <Box as="section" sx={styles.growers} id="our-growers">
      <Container>
        <Grid sx={styles.row}>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">Meet Our Growers!</Heading>
              {/* <Text as="p">
                We offer a risk-free trial period of up to two weeks. You will
                only have to pay if you are happy with the developer and wish to
                continue. If you are unsatisfied, we’ll refund payment or fix
                issues on our dime period customers.
              </Text> */}
              <Text as="p" sx={styles.specialText}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </Text>
              {/* <Link path="/" sx={styles.link}>
                Know more <FaAngleRight />
              </Link> */}
              <Link
                path="/growers"
                ml={2}
                label="Know More"
                sx={styles.link}
                variant="buttons.primary"
              />
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Image src={img1} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Growers;

const styles = {
  growers: {
    background: "linear-gradient(200deg, #B2957F 0%, #ede0d6 40%)",
    // background: 'linear-gradient(190deg, white 0%, #B2957F 30%)',
    // background: '#B2957F',
    overflow: "hidden",
    pt: ["75px", null, null, null, "0", "80px"],
    pb: ["75px", null, null, null, null, null, null],
  },
  row: {
    display: "grid",
    gridGap: [0, null, null, null, "25px", null, "55px"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr 1fr"],
  },
  col: {
    img: {
      maxWidth: ["100%", null, null, "60%", "100%", "100%"],
      mx: [null, null, null, "auto", "0"],
      display: [null, null, null, "block"],
      mt: [null, null, null, null, "40px", "40px"],
    },
  },
  content: {
    pt: [0, null, null, null, "30px", "30px"],
    mb: [null, null, null, "-40px", "0"],
    position: "relative",
    zIndex: 10,
    paddingLeft: ["12px", null, null, null, "0"],
    paddingRight: ["12px", null, null, null, "0", "75px", "0"],
    pb: ["10px"],
    maxWidth: [null, null, null, "590px", null, "100%"],
    width: ["100%"],
    mx: [null, null, null, "auto", null, "0"],
    textAlign: ["center", null, null, null, "left"],
    h3: {
      fontSize: [5, null, "21px", null, 7, "32px", 8],
      maxWidth: [null, null, null, "400px", "none"],
      mx: [null, null, null, "auto", "0"],
      color: "black",
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
      lineHeight: [1.5, null, 1.25],
      mb: ["30px", null, null, null, "30px"],
    },
    p: {
      fontSize: [0, null, 2, null, 4],
      color: "text",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      "+p": {
        mt: ["15px", null, null, null, "15px"],
      },
    },
  },
  specialText: {
    color: "heading",
    opacity: 0.6,
  },
  link: {
    // color: "primary",
    // fontSize: [1, null, 2],
    // display: "inline-block",
    // verticalAlign: "middle",
    // fontWeight: "bold",
    // mt: ["10px", null, null, null, "10px"],
    // svg: {
    //   position: "relative",
    //   top: "3px",
    // },
    backgroundColor: "rgba(0,0,0,0)",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    border: "2px solid",
    borderColor: "primary",
    color: "primary",
    padding: "8px 24px",
    display: [
      "inline-block",
      "inline-block",
      "inline-block",
      "inline-block",
      "inline-block",
    ],
    ml: ["0", null, null, "auto", "30%"],
    mr: ["0", null, null, "20px", "0"],
    mt: "3em",
    "&:hover": {
      color: "#fff",
    },
  },
};
