/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
var slugify = require("slugify");

const path = require("path");
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("./src/templates/post.js");

  const result = await graphql(`
    query {
      allFeedMediumData {
        nodes {
          title
          link
          content {
            encoded
          }
          pubDate
          id
        }
      }
    }
  `);

  result.data.allFeedMediumData.nodes.forEach((post) => {
    createPage({
      path: slugify(post.title, "-"),
      component: blogPostTemplate,
      context: {
        slug: slugify(post.title, "-"),
        id: post.id,
      },
    });
  });
};
