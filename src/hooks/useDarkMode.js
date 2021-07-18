import { useState, useEffect } from "react"

export default function useDarkMode() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    setTheme(window.__theme)
  }, [])
  useEffect(() => {
    window.__setPreferredTheme(theme)
  }, [theme])
  return { theme, setTheme }
}
