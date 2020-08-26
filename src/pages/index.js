import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import "../components/layout.css"

import $ from "jquery"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Strategy from "../components/Home/Strategy"
import Strategies from "../components/Home/Strategies"
import Client from "../components/Home/Client"
import { FaAngleDown } from "react-icons/fa"

class App extends Component {
  componentDidMount() {
    $("button").click(function () {
      $("h1").toggleClass("red")
      $(".app").toggleClass("active")
    })
  }
  render() {
    return (
      <div className="app">
        <h1> jquery in React App </h1>{" "}
        <button className="apptest"> Click Me </button>{" "}
      </div>
    )
  }
}

// import { FaBeer } from 'react-icons/fa';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home " />
    <BackgroundSection />
    <FaAngleDown />
    <Strategies />
    {/* <Strategy items={data.stratagymenu} /> */}
    <Client item={data.clients} />
    <App />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "homebackground.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stratagymenu:allContentfulStrategyMenu{
      edges{
        node{
          id
          title
          url
          category
        }
      }
    }
  }
`

export default IndexPage
