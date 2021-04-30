import React from "react";

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
} from "theme-ui";

export default function GrowersPage() {
  return (
    <StickyProvider>
      <Layout isHome={false}>
        <SEO title="Southland Merchants" />
        <Container sx={styles.container}>
          <Heading as="h3">Contact us</Heading>
          <Text as="p">
            You can get in touch with us through: <br />
            <b>Phone:</b> +61 (0) 409 007 565 or +61 (0) 452 142 412
            <br />
            <b>E-mail:</b> info@southlandmerchants.com.au <br />
            <br />
            Or if you want, you can send us a message here: <br />
          </Text>
          <Box
            as="form"
            onSubmit={(e) => e.preventDefault()}
            sx={styles.formBox}
          >
            <Label htmlFor="email">E-mail</Label>
            <Input name="email" id="email" mb={3} />
            <Label htmlFor="comment">Comment</Label>
            <Textarea name="comment" id="comment" rows={3} mb={3} />
            <Button>Submit</Button>
          </Box>
        </Container>
      </Layout>
    </StickyProvider>
  );
}

const styles = {
  container: {
    mt: ["100px", "100px", "100px", "150px", "150px", "10%"],
    h3: { fontSize: [5, 7], fontWeight: 700 },
    p: {
      fontSize: ["10px", "12px", 3],
      mt: ["15px", "15px", "20px", "20px", "20px", "20px"],
    },
  },
  formBox: {
    mt: ["5%"],
    mb: ["30%", "40%", "80%", "30%", "55%", "10%"],
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    select: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      // backgroundColor: 'white',
      borderColor: "gray",
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
