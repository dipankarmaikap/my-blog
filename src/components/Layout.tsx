import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import ScrollProgressbar from "./ScrollProgressbar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <ScrollProgressbar />
      <Header />
      <div className="bg-[#f5efe0] dark:bg-gray-800">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
