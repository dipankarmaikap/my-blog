import React from "react"
import { Link } from "gatsby"
export default function Footer() {
  return (
    <>
      <footer>
        <div className="px-4 py-6 max-w-[75rem] mx-auto">
          <div className="flex items-center justify-between">
            <div className="credit">
              <p className="font-bold text-lg">
                © {new Date().getFullYear()}
                {` `}
                <Link title="About me" className="hover:underline" to="/about">
                  Dipankar Maikap
                </Link>
              </p>
            </div>
            <a
              className="to-the-top text-lg text-[#6d6d6d] dark:text-gray-200 hover:underline"
              href="#site-header"
            >
              <span className="to-the-top-long hidden sm:block">
                To the top{" "}
                <span className="arrow" aria-hidden="true">
                  ↑
                </span>{" "}
              </span>
              <span className="to-the-top-short sm:hidden">
                Up{" "}
                <span className="arrow" aria-hidden="true">
                  ↑
                </span>{" "}
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
