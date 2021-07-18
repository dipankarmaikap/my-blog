import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            void function() {
              window.__onThemeChange = function() {}
              var preferredTheme
              try {
                preferredTheme = localStorage.getItem('theme')
              } catch (err) { }
              function setTheme(newTheme) {
                const htmlTag = document.getElementsByTagName( 'html' )[0];
                if (preferredTheme && htmlTag.classList.contains(preferredTheme)) {
                  htmlTag.classList.replace(preferredTheme, newTheme)
                } else {
                  htmlTag.classList.add(newTheme)
                }
                window.__theme = newTheme
                preferredTheme = newTheme
                window.__onThemeChange(newTheme)
              }
              window.__setPreferredTheme = function(newTheme) {
                setTheme(newTheme)
                try {
                  localStorage.setItem('theme', newTheme)
                } catch (err) {}
              }
              var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
              darkQuery.addListener(function(e) {
                window.__setPreferredTheme(e.matches ? 'dark' : 'light')
              })
              setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
            }()
            `,
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
