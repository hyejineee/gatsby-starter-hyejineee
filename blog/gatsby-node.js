// query for events and create pages

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/";

  // actions.createPage({
  //   path: basePath,
  //   component: require.resolve("./src/templates/post-list-template.js")
  // });

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }

        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("error loading events", result.errors);

    return;
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    actions.createPage({
      path: `${node.frontmatter.path}`,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        path: node.frontmatter.path
      }
    });
  });
};
