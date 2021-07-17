import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Sun from "./icons/Sun"
import Moon from "./icons/Moon"

export default function DarkMode() {
  return (
    <>
      <div className="toggle flex bg-gray-100 dark:bg-gray-800">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <button
              onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
              className="toggle-button px-4"
              aria-label="toggle-dark-mode"
            >
              {theme === "dark" ? (
                <Sun stockWidth={1.5} className="w-7 h-7" />
              ) : (
                <Moon stockWidth={1.5} className="w-7 h-7" />
              )}
            </button>
          )}
        </ThemeToggler>
      </div>
    </>
  )
}
