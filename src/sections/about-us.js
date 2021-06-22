import React from "react";
import { Box, Container, Heading, Text, Image } from "theme-ui";
import image from "assets/founders.jpeg";

const AboutUs = () => {
  return (
    <Box as="section" sx={styles.aboutUs} id="about-us">
      <Container
        className="about-container"
        sx={{ maxWidth: [null, null, null, "90%", "80%"] }}
      >
        <Box className="about-box" sx={styles.row}>
          {/* <Flex className="about-col" sx={styles.col}> */}
          {/* <Box className="about-text-col" sx={styles.content}> */}
          <Box sx={styles.titleBox}>
            <Heading as="h3">About Us</Heading>
            <Text as="p">
              Olá, we are Nadia and Andre, fellow Brazilians, passionate coffee
              lovers, partners in business and life, and the founders and owners
              of Southland Merchants.
              <br />
              We met in 2002 in a casual setting and instantly felt connected.
              Within a year, we established our first company and fell in love.{" "}
              <br />
              Life in Brazil was great; we love the country and its people, the
              lifestyle and being with our families, but we could not let go of
              the urge to venture out into the world and explore new places.
              Eventually, we decided to embark on an adventure and to move
              overseas with our three girls. We wanted to find a place that
              would offer a bright future for our children, allow them to meet a
              new culture and learn another language. After a lot of research,
              we realised Australia would be our ideal destination. <br />
              In 2017 Australia became our new home. In the same year of our
              arrival, we founded Southland Merchants. Our company supplies
              Australian roasters with delicious Brazilian green coffee, full of
              stories and passion, and connects us back to our roots.
            </Text>
            <Image
              className="about-image"
              src={image}
              sx={styles.image}
              alt=""
              width="60%"
            />
            <Text as="p">
              We want to make a difference and contribute to improving the local
              growers' lives in Brazil. At the same time, we aspire to embrace
              the diversity and potential Brazil has to offer.
              <br />
              In 2021 we launched a dry milling facility in the Mantiqueira de
              Minas region in partnership with a local coffee producer. This
              project means a lot to us. It allows us to develop a closer
              relationship with the local growers, fosters open conversations
              and gives us an insight into what we can do to ensure all parties
              (growers, us and roasters) benefit from each other. One of our
              many achievements is developing a project, Educacoffee, that
              supports the coffee growers in everything they need to run a
              successful farm business. <br />
              We also value our relationship with our coffee roasters. We
              believe, if we understand exactly what they desire and want, what
              they like and enjoy, we can cooperate with our growers in finding
              the best green coffees that suit the roasters’ market and build a
              successful supply chain for all parties involved.
              <br />
            </Text>
            {/* </Box> */}
          </Box>
          {/* </Flex> */}
          {/* <Flex className="about-image-col" sx={styles.col}>
            <Image
              className="about-image"
              src={image}
              sx={styles.image}
              alt=""
            />
          </Flex> */}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;

const styles = {
  aboutUs: {
    pt: "5em",
    // background: "linear-gradient(220deg, #B2957F 0%, #ede0d6 40%)",
    backgroundColor: "background_lighter",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: ["column", null, null, "row-reverse"],
  },
  col: {
    flex: ["0 0 100%", null, null, "0 0 50%"],
  },
  image: {
    // display: "flex",
    // maxWidth: "100%",
    // maxHeight: "500px",
    maxWidth: ["1024*0.5", "1024*0.5", "1024*0.3", "1024*0.5", "1024*0.8"],
    maxHeigth: ["576*0.5", "576*0.5", "576*0.3", "576*0.5", "576*0.8"],
    // height: [null, null, null, null],
    position: "relative",
    // 1024 × 576
    // top: [null, null, null, "-20px", "-45px", "auto"],
    // mt: ["25px", "auto", "auto", "auto", "auto"],
    my: "auto",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    ml: ["25px", null, null, "0"],
    mb: ["10px"],
    mt: ["30px"],
    li: {
      display: "flex",
      alignItems: "center",
      justifyContent: ["flex-start", null, null, null, null, "flex-start"],
      fontSize: [1, null, 2, null, "18px"],
      color: "text",
      lineHeight: [2.56],
      svg: {
        width: [17, null, null, 23],
        height: [17, null, null, 23],
        color: "#DADADA",
        borderRadius: "50%",
        marginRight: ["10px"],
      },
    },
  },
  titleBox: {
    textAlign: ["center", null, null, "center"],
    h3: {
      color: "black",
      fontSize: [5, null, null, "21px", "36px", "32px", 8],
      lineHeight: [1.6, null, null, "1.5"],
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
    },
    p: {
      fontSize: [0, null, 0, 0, 2, 4],
      color: "text",
      opacity: ".6",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      padding: ["0 20px", null, null, "0"],
      my: ["25px"],
      textAlign: "justify",
    },
  },
  link: {
    color: "primary",
    fontSize: [1, null, 2],
    display: "inline-block",
    verticalAlign: "middle",
    fontWeight: "bold",
    pl: ["30px", null, null, "4px", null, "4px"],
    mt: ["5px", null, null, null, "10px"],
    svg: {
      position: "relative",
      top: "3px",
    },
  },
  content: {
    width: "100%",
    textAlign: ["left", null, null, null, "left"],
    py: ["40px", "40px", "40px", null, null, "50px"],
    pl: [null, null, null, "20px", "40px", "60px", "140px"],
  },
};
