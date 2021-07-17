import React from "react"
import { Link } from "gatsby"
import Github from "./icons/Github"
import Twitter from "./icons/Twitter"
import Youtube from "./icons/Youtube"
import Linkedin from "./icons/Linkedin"
import Email from "./icons/Email"
export default function Footer() {
  return (
    <>
      <footer className="text-center border-t dark:border-gray-700 py-8">
        <div className="px-4">
          <div className="social flex space-x-4 justify-center">
            <a title="Github" href="http://">
              <Github className="w-7 h-7 fill-current" />
            </a>
            <a title="Twitter" href="http://">
              <Twitter className="w-7 h-7 fill-current" />
            </a>
            <a title="Youtube" href="http://">
              <Youtube className="w-7 h-7 fill-current" />
            </a>
            <a title="Linkedin" href="http://">
              <Linkedin className="w-7 h-7 fill-current" />
            </a>
            <a title="Email" href="http://">
              <Email className="w-7 h-7 fill-current" />
            </a>
          </div>
          <p className="my-6">
            Want to work with me? {` `}
            <strong>
              <Link
                title="Send me a message"
                className="underline"
                to="/contact"
              >
                Send me a message
              </Link>
            </strong>
            .
          </p>
          <p>
            Copyright © 2019 - {new Date().getFullYear()}. Website designed and
            developed by {` `}
            <strong>
              <Link title="About me" className="underline" to="/about">
                me
              </Link>
            </strong>
            .
          </p>
        </div>
      </footer>
    </>
  )
}
