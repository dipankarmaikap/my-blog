import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "./../components/Seo"
import Layout from "./../components/Layout"

const IndexPage = ({ data }) => {
  const latestPosts = data?.allMdx?.nodes
  console.log(latestPosts)

  return (
    <Layout>
      <SEO title="Home" />
      {latestPosts &&
        latestPosts.map(post => (
          <article key={post.id}>
            <Link to={post.slug}>
              <h3>{post.frontmatter.title}</h3>
            </Link>

            <div className="entry-meta mb-2">
              <span className="posted-on">
                <time
                  className="published"
                  dateTime={post.frontmatter.publishDate}
                >
                  {post.frontmatter.publishDate}
                </time>{" "}
                - {post.timeToRead} min read
              </span>
            </div>
            <p>{post.excerpt}</p>
            <Link to={post.slug}>Read More »</Link>
          </article>
        ))}
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___publishDate }, limit: 5) {
      nodes {
        id
        slug
        frontmatter {
          title
          description
          publishDate(formatString: "MMMM d, YYYY")
        }
        excerpt(pruneLength: 250)
        timeToRead
      }
    }
  }
`
