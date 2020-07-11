const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const tealgardenPost = path.resolve(`./src/templates/tealgardenPost.js`);

  return graphql(`
    {
      allProcessesJson(limit: 10) {
        edges {
          node {
            id
            summary {
              abstract
            }
            icons {
              endIconUrl
              startIconUrl
            }
            title
            author
            authorWallet
            categories
            content {
              text
            }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allProcessesJson.edges.forEach(({ node }) => {
      createPage({
        path: 'process/' + node.id,
        context: {
          pageContent: node,
        },
        component: tealgardenPost,
      });
    });
  });
};
