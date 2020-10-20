import React, { Component } from "react";
import Img from 'gatsby-image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Footer from "../components/Globals/Footer"
import CaseStudiesBanner from "../images/Case-studies-1440.jpg"
import { Link } from "gatsby"
import Search from "../pages/search"




class CaseStudies extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            items: props.items.edges,
            strategyItems: props.items.edges,
        };
    }
    render() {
        if (this.state.items.length >= 0) {
            return (
                <>
                    <section className="main-slider inner-banner">
                        <article
                            className="slider-banner"
                            style={{
                                backgroundImage: `url(${CaseStudiesBanner})`,
                                height: `670px`,
                                backgroundSize: `cover`,
                                display: `flex`,
                                alignItems: `center`,
                                backgroundRepeat: `no-repeat`,
                                backgroundPosition: `center center`,
                            }}
                        >
                        </article>
                        <article className="internalmain-contant">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="banner-menu-contant">
                                            <h1>Case Studies</h1>
                                        </div>
                                        <div className="set-breadc">
                                            <div class="innerbanner-breadcrumb">
                                                <p><Link to="/">Home</Link> - <span>Case Studies</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section class="contant-part inner-pages">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="content-inner">
                                        <div class="case">
                                            {this.state.strategyItems.map(({ node }) => {
                                                return (
                                                    <p key={node.id}>
                                                        <strong>
                                                            <Img class="size-full alignright" fluid={node.image.fluid} alt="cardchoice" width="150" height="91" />
                                                            {node.title}
                                                        </strong>
                                                        {documentToReactComponents(node.content.json)}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                        <div class="enq">
                                            <p>Give us a Call today at <a href="tel:91 9350059390">91 9350059390</a> or <a href="tel:91 9999852209">91 9999852209</a> to experience firsthand why are we admired so much by our clients.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            );
        }
    }
}

const CaseStudiesPage = ({ data }) => {
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
    console.log(data.allContentfulCareerPage);
    return (
        <section>
            <Layout />
            <div className="open-search">
                <div className="close-search">
                    <img src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/close/Shape2x.png" />
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
            <CaseStudies items={data.allContentfulCaseStudies} />
            <Footer items={data.allContentfulFooter} />
        </section>
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
    allContentfulCaseStudies {
        edges {
          node {
            id
            title
            image {
              fluid {
            ...GatsbyContentfulFluid_tracedSVG
              }
            }
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
export default CaseStudiesPage

