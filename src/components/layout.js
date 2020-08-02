import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import "./bootstrap.min.css"



import Navbar from "./Globals/Navbar"
import Footer from "./Globals/Footer"



const Layout = ({ children }) => 
  <div id="site-wrapper">
      <header>
        <article className="top">
          <div className="container">
            <Navbar />
          </div>
        </article>
      </header>
  {children}
  <Footer />
  </div>;


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
