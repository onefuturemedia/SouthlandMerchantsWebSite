import React from "react";
import { graphql } from "gatsby";
import { StickyProvider } from "contexts/app/app.provider";
import { Box, Container, Text } from "theme-ui";
import SEO from "components/seo";
import Layout from "components/layout";
import BlogHeader from "../sections/blog-header";

const MySinglePostPage = ({ data: { post }, ...props }) => {
  return (
    <StickyProvider>
      <Layout isHome={false}>
        <SEO />
        <Box className="blog-box" sx={styles.box}>
          <Container className="blog-box-container">
            <Text as="h3" sx={styles.title}>
              {post.title}
            </Text>
            <Text
              className="blog-content"
              sx={styles.text}
              dangerouslySetInnerHTML={{ __html: post.content.encoded }}
            />
          </Container>
          <BlogHeader />
        </Box>
      </Layout>
    </StickyProvider>
  );
};

export const query = graphql`
  query($id: String!) {
    post: feedMediumData(id: { eq: $id }) {
      title
      pubDate
      link
      id
      guid
      content {
        encoded
      }
    }
  }
`;

export default MySinglePostPage;

const styles = {
  box: {
    backgroundColor: "background",
    px: [0, 0, 0, 0, 0, 0],
    mt: ["150px", "120px", null, "200px", null, "200px"],
  },
  title: {
    fontSize: [6, 6, "50px"],
    my: ["5%"],
    textAlign: "center",
  },
  text: {
    width: "100%",
    "figure:first-child": {
      mt: [0],
      // px: ['-5%', '-5%', '-5%', null, null, '-10%'],
      justifyContent: "center",
    },
    "p:last-child": {
      fontStyle: "italic",
      fontSize: [0, 1],
      lineHeight: ["1em"],
    },
    img: { width: "100%" },
    figcaption: { fontStyle: "italic", fontSize: [0, 1], lineHeight: ["1em"] },
    h4: {
      fontSize: [3, null, 6],
      color: "logo_green_dark",
      mt: ["3em"],
      mb: ["-1em", null, "-.8em"],
    },
    p: { fontSize: [3], justifyContent: "left", letterSpacing: ["-0.003em"] },
    em: { fontSize: [12] },
    iframe: {
      width: ["100%", "100%", "100%", "100%", "840px"],
      maxWidth: "840px",
      mx: "auto",
      display: "block",
      // height: ['unset', '100%']
      // justifyContent:"center"
    },
  },
};
