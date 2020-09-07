import React, { Component } from "react"
import { graphql } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-html-renderer"
import "../components/layout.css"
import "../components/Home/Animate.min.css"
import $ from "jquery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Strategy from "../components/Home/Strategy"
// import Footer from "../components/Globals/Footer"
import FooterMain from "../components/Globals/Footer-main"
// import Strategies from "../components/Home/Strategies"
import Client from "../components/Home/Client"
// import { FaAngleDown } from "react-icons/fa"

class App extends Component {
  // jquery Testing
  componentDidMount() {
    $("button").click(function () {
      $("h1").toggleClass("red")
      $(".app").toggleClass("active")
    })
  }
  render() {
    return (
      // <div className="app">
      //   <h1> jquery in React App </h1>{" "}
      //   <button className="apptest"> Click Me </button>{" "}
      // </div>
      // jquery Testing end
      <></>
    )
  }
}

// import { FaBeer } from 'react-icons/fa';

const IndexPage = ({ data }) => {
  return (

    <Layout>
      <SEO title="Home " />
      <BackgroundSection items={data.homeSlider} />
      {/* <FaAngleDown /> */}
      <Strategy items={data.allContentfulStrategyRichContent} />
      <Client item={data.clients} />
      <App />
      <FooterMain />
      {/* <Footer items={data.allContentfulFooter} /> */}
    </Layout>
  );
}
export const query = graphql`
  {
    img: file(relativePath: { eq: "homebackground.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  homeSlider: allContentfulHomeSlider(sort: {fields: updatedAt, order: ASC}) {
    edges {
      node {
        id
        heading
        sliderContent {
          sliderContent
        }
        sliderButton
        sliderButtonUrl
      }
    }
  }
  allContentfulStrategyRichContent(sort: {fields: updatedAt, order: ASC}) {
    edges {
      node {
        id
        title
        content {
          json
        }
      }
    }
  }
  allContentfulFooter(sort: {fields: updatedAt, order: ASC}) {
    edges {
      node {
        id
        title
        footerContent {
          json
        }
      }
    }
  }
}
`;

export default IndexPage
