import React from "react"
import Github from "./icons/Github"
import Twitter from "./icons/Twitter"
import Youtube from "./icons/Youtube"
import Linkedin from "./icons/Linkedin"
import Email from "./icons/Email"
export default function MyLinks() {
  return (
    <>
      <div className="social flex space-x-4">
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
    </>
  )
}
