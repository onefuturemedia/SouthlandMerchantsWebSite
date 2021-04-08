import React from "react";

const MySinglePostPage = ({ data: { post }, ...props }) => (
  <h3>{post.title}</h3>
);

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
