import React from "react";
import emailjs from "emailjs-com";

import { StickyProvider } from "contexts/app/app.provider";
import SEO from "components/seo";
import Layout from "components/layout";

import {
  Container,
  Heading,
  Text,
  Label,
  Input,
  Textarea,
  Box,
  Button,
  Image,
} from "theme-ui";

import AndreImg from "assets/andre.jpeg";
import NadiaImg from "assets/nadia.jpeg";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lkhznlr",
        "template_j4y823d",
        e.target,
        "user_B410xs5Zte99ElgBpjyJW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log(error.text);
          alert("Erro no envio da mensagem!");
        }
      );
  }

  return (
    <StickyProvider>
      <Layout isHome={false}>
        <SEO title="Southland Merchants" />
        <Box
          as="section"
          classname="contact-us-container"
          sx={styles.container}
        >
          <Heading classname="contact-us-heading" as="h3">
            Contact Us
          </Heading>
          <Container
            classname="contact-us-founders-container"
            sx={styles.founders}
          >
            <Box classname="contact-us-nadia-box" sx={styles.foundersBox}>
              <Image src={NadiaImg} alt="Nadia profile image" />
              <Text classname="contact-us-text" as="h2">
                <b>Nadia</b>
              </Text>
              <br />
              +61 (0) 409 007 565
              <br />
              info@southlandmerchants.com.au <br />
            </Box>
            <Box classname="contact-us-andre-box" sx={styles.foundersBox}>
              <Image src={AndreImg} alt="Andre profile image" />
              <Text classname="contact-us-text" as="h2">
                <b>Andre</b>
              </Text>
              <br />
              +61 (0) 452 142 412
              <br />
              info@southlandmerchants.com.au <br />
            </Box>
          </Container>
          <Text classname="contact-us-text" as="p">
            Or if you want, you can send us a message here: <br />
          </Text>
          <Container
            classname="contact-us-form"
            as="form"
            onSubmit={(e) => sendEmail(e)}
            sx={styles.formBox}
          >
            <Label htmlFor="email">E-mail</Label>
            <Input name="email" id="email" mb={3} />
            <Label htmlFor="comment">Comment</Label>
            <Textarea name="comment" id="comment" rows={3} mb={3} />
            <Button>Submit</Button>
          </Container>
        </Box>
      </Layout>
    </StickyProvider>
  );
}

const styles = {
  container: {
    pt: ["100px", "100px", "100px", "150px", "150px", "10%"],
    h3: { textAlign: "center", fontSize: [5, 8], fontWeight: 700 },
    p: {
      textAlign: "center",
      fontSize: ["10px", "12px", 3],
      mt: ["15px", "15px", "20px", "20px", "20px", "20px"],
    },
    backgroundColor: "background_lighter",
  },
  founders: {
    pt: ["20px", "50px", "100px", "100px"],
    px: "auto",
    display: ["flex", "flex", "flex"],
  },
  foundersBox: {
    width: ["40%", "40%", "40%", "30%"],
    mx: "auto",
    mb: ["50px", "50px", "50px"],
    img: { with: "20px", borderRadius: "10px" },
    fontSize: ["7px", "8px", "9px", "12px", 3],
    lineHeight: ["1.2em", "1.2em", "1.2em"],
    textAlign: "center",
    h2: { mt: ["10px", "10px", "10px"] },
  },
  formBox: {
    width: "100%",
    mt: ["5%"],
    pb: ["30%", "40%", "80%", "30%", "55%", "10%"],
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "background_secondary",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    select: {
      borderColor: "background_secondary",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      // backgroundColor: 'white',
      backgroundColor: "background_ligther",
      borderColor: "background_secondary",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    slider: {
      bg: "muted",
    },
  },
};
