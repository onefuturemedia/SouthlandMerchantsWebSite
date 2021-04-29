import React from "react";
import { Box, Text, Image } from "theme-ui";
import { FaPlusCircle } from "react-icons/fa";

const GrowerCard = ({ grower }) => {
  return (
    <Box as="section" sx={styles.growerCard} id="grower">
      <Image sx={styles.growerImg} src={grower.img} alt={grower.name} />
      <Text as="h4" sx={styles.growerName}>
        {grower.name}
      </Text>
      <Text id="grower-text" as="p" sx={styles.growerText}>
        {grower.description}
      </Text>
      <a href={grower.documentPath} download>
        <FaPlusCircle />
      </a>
    </Box>
  );
};

export default GrowerCard;

const styles = {
  growerImg: {
    width: "80%",
  },
  growerCard: {
    overflow: "hidden",
    width: ["120px"],
    height: ["230px"],
    mr: ["0.5%"],
    mb: ["2%"],
    // pt: ['75px', null, null, null, '0', '20px'],
    pt: ["5px"],
    // pb: ['75px', null, null, null, null, '20px', '20px'],
    flexWrap: "wrap",
    borderRadius: "0.4em",
    border: "2px solid",
    borderColor: "secondary",
    p: {
      fontSize: "0.7em",
      lineHeight: "1.2em",
      maxHeight: ["6em"],
      fontStyle: "italic",
      mb: ["0.5em"],
    },
  },
  growerName: {
    fontSize: ["0.8em"],
    mt: ["0.25em"],
    mb: ["0.125em"],
    // backgrounColor:"background2",
    textAlign: "center",
  },
  button: { width: "100%", fontSize: 0, py: "0", mb: "0", borderRadius: "0" },
};
