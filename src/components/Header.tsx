import { Link } from "gatsby"
import React from "react"
import DarkMode from "./DarkMode"
import { StaticImage } from "gatsby-plugin-image"
import MobileNav from "./MobileNav"

function Header() {
  return (
    <header className="border-b dark:border-gray-700 mt-0.5 smooth">
      <div className="flex flex-wrap items-stretch justify-between px-4">
        <div className="site-branding py-2">
          <Link
            className="text-4xl font-medium uppercase flex items-center"
            to="/"
          >
            <div className="me ring-2 ring-gray-700 dark:ring-white">
              <StaticImage
                width={50}
                height={50}
                src="../images/My-Profile-Picture.png"
                title="Dipankar Maikap"
                alt="Dipankar Maikap"
              />
            </div>
            <span className="hidden">Dipankar Maikap</span>
          </Link>
          {/* <span className="block">{description}</span> */}
        </div>
        <div className="navigation flex">
          <nav className="text-xl space-x-2 hidden sm:flex">
            <Link
              className="nav-item h-full flex items-center px-4 hover:bg-gray-100 dark:hover:bg-gray-800 smooth"
              activeClassName="bg-gray-100 dark:bg-gray-800"
              to="/about"
            >
              About
            </Link>
            <Link
              className="nav-item h-full flex items-center px-4 hover:bg-gray-100 dark:hover:bg-gray-800 smooth"
              activeClassName="bg-gray-100 dark:bg-gray-800"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="nav-item h-full flex items-center px-4 hover:bg-gray-100 dark:hover:bg-gray-800 smooth"
              activeClassName="bg-gray-100 dark:bg-gray-800"
              to="/snippets"
            >
              Snippets
            </Link>
            <Link
              className="nav-item h-full flex items-center px-4 hover:bg-gray-100 dark:hover:bg-gray-800 smooth"
              activeClassName="bg-gray-100 dark:bg-gray-800"
              to="/contact"
            >
              Contact
            </Link>
          </nav>
          <div className="icones flex space-x-3">
            <DarkMode />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
