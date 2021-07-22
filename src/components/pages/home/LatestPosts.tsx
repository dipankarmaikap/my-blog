import React from "react"
import { Link } from "gatsby"

export default function LatestPosts({ posts }) {
  return (
    <div className="latest-posts">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-3xl font-bold ">Latest Posts</h2>
        <Link className="font-bold text-link hover:underline" to="/blog">
          View all
        </Link>
      </div>
      <div className="posts flex flex-col space-y-6">
        {posts &&
          posts.map(post => (
            <article key={post.id}>
              <Link to={`blog/${post.slug}`}>
                <h3 className="font-semibold text-2xl hover:underline hover:text-link dark:hover:text-white">
                  {post.frontmatter.title}
                </h3>
              </Link>
              <div className="entry-meta mb-2 mt-1">
                <span className="posted-on text-sm italic ">
                  <time
                    className="published"
                    dateTime={post.frontmatter.publishDate}
                  >
                    {post.frontmatter.publishDate}
                  </time>{" "}
                  - {post.timeToRead} min read
                </span>
              </div>
              <p className="mb-2 text-base">{post.excerpt}</p>
              <Link
                className="text-link font-medium hover:underline"
                to={`blog/${post.slug}`}
              >
                Read More »
              </Link>
            </article>
          ))}
      </div>
    </div>
  )
}
