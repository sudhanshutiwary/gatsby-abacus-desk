import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import "./bootstrap.min.css"
import "../../style/with-lunr.css"

import Navbar from "./Globals/Navbar"

const Layout = ({ children }) => (
  <div id="site-wrapper">
    <header>
      <article className="top">
        <div className="container">
          <Navbar />
          {/* <Searchpage /> */}
        </div>
      </article>
    </header>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
