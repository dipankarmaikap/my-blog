import React, { useEffect, useState } from "react"

export default function ScrollProgressbar() {
  const [progress, SetProgress] = useState(0)
  useEffect(() => {
    function handleScroll() {
      let currScrollHeight = document.documentElement.scrollTop
      let totalContentHeight = document.documentElement.scrollHeight
      let screenHeight = document.documentElement.clientHeight
      let totalScrollHeight = totalContentHeight - screenHeight
      let scrolled = (currScrollHeight / totalScrollHeight) * 100
      SetProgress(Math.round(scrolled))
    }

    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <div className="progress-bar-container fixed w-full top-0 bg-gray-200">
        <div
          style={{ width: `${progress}%` }}
          className="progress-bar h-0.5 bg-gradient-to-r from-green-400 to-blue-500 w-0"
        ></div>
      </div>
    </>
  )
}
