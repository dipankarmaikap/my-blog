import { Link } from "gatsby"
import React from "react"
import DarkMode from "./DarkMode"
import { StaticImage } from "gatsby-plugin-image"
import MobileNav from "./MobileNav"

function Header() {
  return (
    <header id="site-header" className="mt-0.5">
      <div className="max-w-[105rem] mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="lg:hidden">
          <DarkMode />
        </div>
        <div className="site-branding flex flex-col lg:flex-row lg:space-x-4 items-center">
          <div className="site-title text-2xl font-medium sm:font-bold">
            <Link className="hover:underline" to="/">
              Dipankar Maikap
            </Link>
          </div>
          <div className="hidden sm:block site-desc text-lg font-medium text-[#6d6d6d]">
            Web developer & content creator
          </div>
        </div>
        <div className="navigation  space-x-6 hidden lg:flex">
          <nav className="text-lg font-medium space-x-6 hidden sm:flex items-center">
            <div className="flex items-center space-x-6">
              <Link
                className="text-link hover:underline"
                activeClassName="underline"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-link hover:underline"
                activeClassName="underline"
                to="/about"
              >
                About
              </Link>
              <Link
                className="text-link hover:underline"
                activeClassName="underline"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="text-link hover:underline"
                activeClassName="underline"
                to="/snippets"
              >
                Snippets
              </Link>
              <Link
                className="text-link hover:underline"
                activeClassName="underline"
                to="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="w-[1px] h-6 bg-gray-500 dark:bg-gray-300"></div>
            <DarkMode />
          </nav>
        </div>
        <div className="mobile-nav lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
