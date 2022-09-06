exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectTemplate = require.resolve(
    `./src/templates/project-template.tsx`
  );

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: projectTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
  let config = getConfig();

  config.optimization = {
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 10,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 10000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  };

  actions.replaceWebpackConfig(config);
};
