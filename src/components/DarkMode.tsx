import React from "react"

import Sun from "./icons/Sun"
import Moon from "./icons/Moon"
import useDarkMode from "../hooks/useDarkMode"

export default function DarkMode() {
  const { theme, setTheme } = useDarkMode()
  return (
    <>
      <div className="toggleflex">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="toggle-button hover:underline flex flex-col justify-center items-center px-2 py-1 max-w-[44px] focus:outline-black"
          aria-label="toggle-dark-mode"
        >
          {theme === "dark" ? (
            <Sun stockWidth={1.5} className="w-7 h-7" />
          ) : (
            <Moon stockWidth={1.5} className="w-7 h-7" />
          )}
          <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-300 h-5">
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </button>
      </div>
    </>
  )
}
