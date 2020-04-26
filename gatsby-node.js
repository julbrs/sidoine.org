const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                collection
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  const blogPosts = posts.filter(
        edge => edge.node.fields.collection === `blog`
  );

  const privateBlogPosts = posts.filter(
        edge => edge.node.fields.collection === `private`
  );


  blogPosts.forEach((post, index) => {
    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  privateBlogPosts.forEach((post, index) => {
    const previous = index === privateBlogPosts.length - 1 ? null : privateBlogPosts[index + 1].node
    const next = index === 0 ? null : privateBlogPosts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    // get parent node, it's the collection ! (blog private ...)
    const parent = getNode(node.parent)

    createNodeField({
      name: `slug`,
      node,
      value: `/${parent.sourceInstanceName}${value}`,
    })

    createNodeField({
      name: `collection`,
      node,
      value: parent.sourceInstanceName,
    })
  }
}
