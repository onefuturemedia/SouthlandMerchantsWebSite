import React from "react";
import { Box, Container, Grid, Heading, Text, Image, Flex } from "theme-ui";
import GrowerCard from "components/grower-card";

const GrowersRegion = ({ region }) => {
  return (
    <Box
      as="section"
      sx={{
        overflow: "hidden",
        backgroundColor: "background_lighter",
        pt: [null, null, null, null, null, null],
        pb: [null, null, null, null, null, null, null],
      }}
      id="our-growers"
    >
      {!region.isCoffee && (
        <Container className="our-growers-container">
          {region.img ? (
            <Grid sx={region.imgPosAlt ? styles.row : styles.reverseRow}>
              <Box sx={styles.imgCol} className="our-growers-region-image">
                <Image src={region.img} alt={region.tag} />
                <Text
                  as="p"
                  className="our-growers-region-map-info"
                  sx={styles.imgCol.specialText}
                >
                  {region.text}
                </Text>
              </Box>
              <Box sx={styles.col} className="our-growers-region-text">
                <Box sx={styles.content}>
                  <Heading as="h3">{region.name}</Heading>
                  <Flex sx={styles.growerGrid}>
                    {region.growers.map((growerData) => (
                      <GrowerCard grower={growerData} />
                    ))}
                  </Flex>
                </Box>
              </Box>
            </Grid>
          ) : (
            <Grid sx={styles.singleRow}>
              <Box sx={styles.col}>
                <Box sx={styles.content}>
                  <Heading as="h3">{region.name}</Heading>
                  <Flex sx={styles.growerGrid}>
                    {region.growers.map((growerData) => (
                      <GrowerCard grower={growerData} />
                    ))}
                  </Flex>
                </Box>
              </Box>
            </Grid>
          )}
        </Container>
      )}
      {region.isCoffee && (
        <Container className="coffee-container">
          <Grid sx={region.imgPosAlt ? styles.row : styles.reverseRow}>
            <Box sx={styles.imgCol} className="coffe-image">
              <Image src={region.img} alt={region.tag} />
            </Box>
            <Box sx={styles.col} className="coffe-text">
              <Box sx={styles.coffeeContent}>
                <Heading as="h3">{region.name}</Heading>
                <Text as="p" className="coffee-info">
                  {region.text}
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default GrowersRegion;

const styles = {
  singleRow: {
    display: "grid",
    gridGap: [0, null, null, null, "25px", null, "55px"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr"],
    mb: ["200px"],
  },
  row: {
    display: "grid",
    gridGap: [0, null, null, null, "25px", null, "55px"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr 1fr"],
  },
  reverseRow: {
    display: "grid",
    gridGap: [0, null, null, null, "25px", null, "55px"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr 1fr"],
    direction: "rtl",
  },
  imgCol: {
    img: {
      maxWidth: ["100%", "50%", "50%", "50%", "70%", "70%"],
      mx: ["auto", "auto", "auto", "auto", "auto", "auto"],
      display: ["block", null, null, "block"],
      mt: [null, null, null, "3em", "6em", "6em"],
    },
    specialText: {
      display: ["none", "none", null, null, "block"],
      fontSize: [0, null, 2, "10px", "12px", "14px"],
      // color: 'text',
      lineHeight: ["26px", null, null, 1.8, null, "1.6em"],
      // '+p': {
      //   mt: ['15px', null, null, null, '15px']
      // }
      // mt: ["-100px"],
      position: "absolute",
      width: ["400px", "400px", "400px", "400px", "500px", "600px"],
      // width:"40%",
      padding: "1%",
      mt: ["-400px"],
      direction: "ltr",
      textAlign: "justify",
      //   justifyContent: "center",
      color: "white",
      opacity: 0,
      backgroundColor: "logo_green_dark",
      borderRadius: "1em",
      border: "1px solid",
      borderColor: "secondary",
      transition: "opacity 1s ease",
    },
    "&:hover": {
      p: {
        opacity: 0.7,
      },
    },
  },
  content: {
    pt: [0, null, null, null, "30px", "30px"],
    mb: [null, null, null, "0", "0"],
    position: "relative",
    zIndex: 10,
    paddingLeft: ["12px", null, null, null, "0"],
    paddingRight: ["12px", null, null, null, "0", "75px", "0"],
    pb: ["10px"],
    maxWidth: [null, null, null, "590px", null, "100%"],
    width: ["100%"],
    mx: [null, null, null, "auto", null, "0"],
    textAlign: ["center", null, null, null, "center"],
    h3: {
      fontSize: [6, 7, 7, 7, 7, 8, 8],
      maxWidth: [null, null, null, "400px", "none"],
      mx: [null, null, null, "auto", "0"],
      color: "black",
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
      lineHeight: [1.5, null, 1.25],
      mb: ["30px", null, null, null, "30px"],
    },
    p: {
      fontSize: [0, null, 2, null, "17px"],
      color: "text",
      lineHeight: [1, null, null, 1.8, null, 2.06],
      "+p": {
        mt: ["15px", null, null, null, "15px"],
      },
    },
  },
  coffeeContent: {
    pt: [0, null, null, null, "30px", "30px"],
    mb: [null, null, null, "0", "0"],
    position: "relative",
    zIndex: 10,
    paddingLeft: ["12px", null, null, null, "0"],
    paddingRight: ["12px", null, null, null, "0", "75px", "0"],
    pb: ["10px"],
    maxWidth: [null, null, null, "590px", null, "100%"],
    width: ["100%"],
    mx: [null, null, null, "auto", null, "0"],
    textAlign: ["left", null, null, null, "left"],
    h3: {
      fontSize: [6, 7, 7, 7, 7, 8, 8],
      maxWidth: [null, null, null, "400px", "none"],
      mx: [null, null, null, "auto", "0"],
      color: "black",
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
      lineHeight: [1.5, null, 1.25],
      mb: ["30px", null, null, null, "30px"],
    },
    p: {
      fontSize: [0, null, 2, null, 5],
      color: "text",
      lineHeight: [1, null, null, 1.8, null, 2.06],
      "+p": {
        mt: ["15px", null, null, null, "15px"],
      },
    },
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
  growerGrid: {
    flexWrap: "wrap",
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  col: {
    mb: ["150px", "150px", "200px", "200px", "100px", "100px"],
  },
};
