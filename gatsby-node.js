const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetAllMDXPosts {
      allMdx(
        sort: { order: DESC, fields: frontmatter___publishDate }
        limit: 5
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  const posts = result.data.allMdx.nodes
  console.log(posts)
  posts.forEach((post, index) => {
    createPage({
      path: `blog/${post.slug}`,
      component: path.resolve(`./src/templates/posts-page-layout.js`),
      context: { id: post.id },
    })
  })
}
