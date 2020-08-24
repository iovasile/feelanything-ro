/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <Nav />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
