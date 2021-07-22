import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
export default function postsPageLayout({ data: { mdx } }) {
  return (
    <Layout>
      <article>
        <header className="bg-white dark:bg-gray-900">
          <div className="max-w-[62.5rem] mx-auto px-4 py-10 md:py-20 text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold sm:font-extrabold md:font-black">
              {mdx.frontmatter.title}
            </h1>
          </div>
        </header>
        <main>
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </main>
        <footer>tags</footer>
      </article>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
