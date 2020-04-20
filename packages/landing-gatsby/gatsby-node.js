const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const processTemplate = path.resolve(`./src/templates/processTamplate.js`);

  return graphql(`
    {
      allProcessesJson(limit: 10) {
        edges {
          node {
            id
            summary {
              abstract
              benefits
            }
            icons {
              endIconUrl
              startIconUrl
            }
            title
            author
            authorWallet
            categories
            examples
            addoptionRequirements {
              description
              link
              name
              type
            }
            components {
              accountabilities
              description
              domains
              name
              purpose
              title
              type
            }
            instructions {
              name
              steps {
                description
                name
                type
              }
              tool {
                description
                link
                name
                type
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
        path: node.id,
        context: {
          pageContent: node,
        },
        component: processTemplate,
      });
    });
  });
};
