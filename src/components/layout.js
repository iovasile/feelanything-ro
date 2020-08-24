/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
