import React, { Component } from "react"
import { graphql } from "gatsby"
import Search from "./search"
// import { documentToReactComponents } from "@contentful/rich-text-html-renderer"
import "../components/layout.css"
import "../components/Home/Animate.min.css"
import $ from "jquery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Strategy from "../components/Home/Strategy"
// import Search from "../components/search"
import Footer from "../components/Globals/Footer"
// import FooterMain from "../components/Globals/Footer-main"
// import Strategies from "../components/Home/Strategies"
import Client from "../components/Home/Client"
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
  console.log(data.allContentfulAboutPage);
  console.log(data);
  console.log(data.allContentfulPost);
  console.log(data.allContentfulPage);

  let items3 = [];
  for (let index = 0; index < data.allContentfulAboutPage.edges.length; index++) {

    // console.log(this.state.items[index].node.title);
    items3.push({ 'title': data.allContentfulAboutPage.edges[index].node.title, 'url': data.allContentfulAboutPage.edges[index].node.slug });
    // items3.push({ 'url': data.allContentfulAboutPage.edges[index].node.slug });

  }

  for (let index = 0; index < data.allContentfulPost.edges.length; index++) {

    // console.log(this.state.items[index].node.title);
    items3.push({ 'title': data.allContentfulPost.edges[index].node.title, 'url': data.allContentfulPost.edges[index].node.slug });
  }

  for (let index = 0; index < data.allContentfulPage.edges.length; index++) {

    // console.log(this.state.items[index].node.title);
    items3.push({ 'title': data.allContentfulPage.edges[index].node.title, 'url': data.allContentfulPage.edges[index].node.slug });
  }
  items3.push({ 'title': "rahul", 'url': "/rahul/" });
  items3.push({ 'title': "Work", 'url': "/work/" });
  items3.push({ 'title': "Insight", 'url': "/insight/" });
  items3.push({ 'title': "G Suite", 'url': "/g-suite/" });
  items3.push({ 'title': "CRM", 'url': "/crm/" });
  items3.push({ 'title': "Career", 'url': "/career/" });
  items3.push({ 'title': "Contact Us", 'url': "/contact-us/" });
  items3.push({ 'title': "Submit Rfp", 'url': "/submit-rfp/" });
  items3.push({ 'title': "Testimonials", 'url': "/testimonials/" });
  console.log(items3);
  // this.items1 = items3;
  // console.log(this.items1);

  return (

    <Layout>
      <SEO title="Home " />
      <BackgroundSection items={data.homeSlider} />
      {/* <FaAngleDown /> */}
      <Strategy items={data.allContentfulStrategyRichContent} />
      <Client item={data.clients} />
      <div className="open-search">
        <div className="close-search">
          <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/close/Shape2x.png" alt="" />
        </div>
        <div className="search-here">
          <div className="input-here">
            {/* <input class="search-field" placeholder="Search …" type="text" /> */}
            <Search items={items3} />
            {/* <button type="submit" class="search-submit">
              <span class="screen-reader-text">Search</span>
            </button> */}
          </div>
        </div>
      </div>

      <App />
      {/* <FooterMain /> */}
      <Footer items={data.allContentfulFooter} />
    </Layout>
  );
}

export const query = graphql`
  {
    allContentfulPage(filter: {id: {ne: "null"}}){
      edges {
        node {
          title
          slug
          image {
            file {
              url
            }
          }
          subHeading
          content {
            childContentfulRichText {
              html
            }
          }
          footerContent {
            footerContent
          }
          footerSubContent
        }
      }
    }
    allContentfulAboutPage {
      edges {
        node {
          title
          slug
          image {
            file {
              url
            }
          }
          subHeading
          content {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          slug
          content {
            childContentfulRichText {
              html
            }
          }
          image {
            fluid {
              src
            }
          }
        }
      }
    }
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
