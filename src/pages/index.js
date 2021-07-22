import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/Seo"
import Layout from "./../components/Layout"
import LatestPosts from "./../components/pages/home/LatestPosts"
import MyProjects from "./../components/pages/home/MyProjects"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="max-w-md">
        <h1 className="text-[32px] sm:text-4xl uppercase font-bold">
          Dipankar Maikap
        </h1>
        <p className="text-2xl mt-2 text-gray-500 dark:text-gray-400">
          Web developer & content creator.
        </p>
      </div>
      <p className="text-lg mt-4 sm:mt-6">
        Hi, I’m Dipankar! Welcome to my digital playground. I’m passionate about
        making web Fast, Accessible and Beautiful.
      </p>
      <p className="my-4 sm:my-6 text-lg">
        Want to work with me? {` `}
        <strong>
          <Link
            title="Send me a message"
            className="underline hover:text-link"
            to="/contact"
          >
            Send me a message
          </Link>
        </strong>
        .
      </p>
      <div className="flex flex-col space-y-6">
        <LatestPosts posts={data?.allMdx?.nodes} />
        <MyProjects />
      </div>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___publishDate }, limit: 3) {
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
