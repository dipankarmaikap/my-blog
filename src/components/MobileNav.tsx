import React, { useState } from "react"
import Menu from "./icons/Menu"
import { Link } from "gatsby"
import Transition from "./Transition"
import Close from "./icons/Close"

export default function MobileNav() {
  const [menuStatus, setMenuStatus] = useState(false)
  return (
    <>
      <div className="mobile-menu flex bg-gray-100 dark:bg-gray-800 sm:hidden">
        <button
          onClick={() => setMenuStatus(true)}
          className="menu-button px-4"
          aria-label="open-mobile-menu"
        >
          <Menu className="w-7 h-7" stockWidth={1.5} />
        </button>
        <Transition
          appear
          show={menuStatus}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          className="fixed inset-0 bg-gray-100 dark:bg-gray-800 sm:hidden"
        >
          <div
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
            className="px-4 py-1 flex flex-col h-full"
          >
            <div className="close flex justify-end">
              <button
                className="menu-button p-4 bg-gray-200 dark:bg-gray-700"
                aria-label="close-mobile-menu"
                onClick={() => setMenuStatus(false)}
              >
                <Close className="w-7 h-7" stockWidth={1.5} />
              </button>
            </div>
            <nav className="text-xl flex flex-col">
              <Link
                className="nav-item px-4 hover:bg-gray-100 dark:hover:bg-gray-800 smooth"
                activeClassName="bg-gray-100 dark:bg-gray-800"
                to="/about"
              >
                About
              </Link>
              <Link
                className="nav-item px-4 hover:bg-gray-100 dark:hover:bg-gray-800 smooth"
                activeClassName="bg-gray-100 dark:bg-gray-800"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="nav-item px-4 hover:bg-gray-100 dark:hover:bg-gray-800 smooth"
                activeClassName="bg-gray-100 dark:bg-gray-800"
                to="/snippets"
              >
                Snippets
              </Link>
              <Link
                className="nav-item px-4 hover:bg-gray-100 dark:hover:bg-gray-800 smooth"
                activeClassName="bg-gray-100 dark:bg-gray-800"
                to="/contact"
              >
                Contact
              </Link>
            </nav>
            <footer>
              <div className="social">
                <p>Social links</p>
              </div>
            </footer>
          </div>
        </Transition>
      </div>
    </>
  )
}
