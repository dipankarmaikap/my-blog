import React from "react"

import Sun from "./icons/Sun"
import Moon from "./icons/Moon"
import useDarkMode from "../hooks/useDarkMode"

export default function DarkMode() {
  const { theme, setTheme } = useDarkMode()
  return (
    <>
      <div className="toggle flex bg-gray-100 dark:bg-gray-800">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="toggle-button px-4"
          aria-label="toggle-dark-mode"
        >
          {theme === "dark" ? (
            <Sun stockWidth={1.5} className="w-7 h-7" />
          ) : (
            <Moon stockWidth={1.5} className="w-7 h-7" />
          )}
        </button>
      </div>
    </>
  )
}
