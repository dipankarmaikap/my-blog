import React, { useState, useEffect } from "react"
import Menu from "./icons/Menu"
import { Link } from "gatsby"
import Transition from "./Transition"
import Close from "./icons/Close"

export default function MobileNav() {
  const [menuStatus, setMenuStatus] = useState(false)
  useEffect(() => {
    const body = document.body
    if (menuStatus) {
      body.style.overflow = "hidden"
    } else {
      body.style.overflow = "auto"
    }
  }, [menuStatus])
  return (
    <>
      <div className="mobile-menu flex">
        <button
          onClick={() => setMenuStatus(true)}
          className="menu-button hover:underline flex flex-col items-center px-2 py-1 max-w-[44px] focus:outline-black"
          aria-label="open-mobile-menu"
        >
          <Menu className="w-7 h-7" stockWidth={3.5} />
          <span className="text-[10px] h-5 font-semibold text-gray-500 dark:text-gray-300">
            Menu
          </span>
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
          className="fixed inset-0 bg-white dark:bg-gray-900  lg:hidden z-10"
        >
          <div
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
            className="flex flex-col h-full"
          >
            <div className="close flex justify-end border-b dark:border-gray-600 px-2 py-4">
              <button
                className="close-menu-button flex items-center space-x-2 px-2 py-4 font-medium hover:underline "
                aria-label="close-mobile-menu"
                onClick={() => setMenuStatus(false)}
              >
                <span>Close Menu</span>
                <Close className="w-7 h-7" stockWidth={1.5} />
              </button>
            </div>
            <nav className="text-xl flex flex-col">
              <Link
                className="nav-item p-4 text-link border-b dark:border-gray-600 font-bold"
                activeClassName="underline"
                to="/"
              >
                Home
              </Link>
              <Link
                className="nav-item p-4 text-link border-b dark:border-gray-600 font-bold"
                activeClassName="underline"
                to="/about"
              >
                About
              </Link>
              <Link
                className="nav-item p-4 text-link border-b dark:border-gray-600 font-bold"
                activeClassName="underline"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="nav-item p-4 text-link border-b dark:border-gray-600 font-bold"
                activeClassName="underline"
                to="/snippets"
              >
                Snippets
              </Link>
              <Link
                className="nav-item p-4 text-link border-b dark:border-gray-600 font-bold"
                activeClassName="underline"
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
