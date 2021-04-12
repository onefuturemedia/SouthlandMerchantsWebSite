import React from "react";

const MySinglePostPage = ({ data: { post }, ...props }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.content.encoded }}></div>
    </div>
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
