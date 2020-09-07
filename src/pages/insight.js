import React, { Component } from "react";
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"
import { Link } from "gatsby"
import Insights from "../images/Insights.jpg"


class Insight extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            items: props.items.edges,
            strategyItems: props.items.edges,
        };
    }
    render() {
        if (this.state.items.length > 0) {
            return (
                <section className="Internal-page">
                    <section className="main-slider inner-banner">
                        <article
                            className="slider-banner"
                            style={{
                                backgroundImage: `url(${Insights})`,
                                height: `670px`,
                                backgroundSize: `cover`,
                                display: `flex`,
                                alignItems: `center`,
                                backgroundSize: `cover`,
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
                                            <h1>Insights</h1>
                                        </div>
                                        <div className="set-breadc">
                                            <div class="innerbanner-breadcrumb">
                                                <p><Link to="/">Home</Link> - <span>Insights</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className="insight-content-part">
                        <div className="contact-page-detail">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        {this.state.items.map(({ node }) => {
                                            return (
                                                <div className="insight-main-content">
                                                    <div className="insight-page-head">
                                                        <h2>{node.title}</h2> </div>
                                                    <div className="insight-img">
                                                        <img src={node.image.fluid.src} />
                                                    </div>
                                                    <div className="insight-content">
                                                        <p>{node.content.content} </p>
                                                        {node.slug !== "#" &&
                                                            <Link to={node.slug}>Read More</Link>}
                                                    </div>

                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            );
        }
    }
}


const InsightPage = ({ data }) => {
    return (
        <>
            <header>
                <article className="top">
                    <div className="container">
                        <Navbar />
                    </div>
                </article>
            </header>
            <Insight items={data.allContentfulInsightsPage} />
            <Footer items={data.allContentfulFooter} />
        </>
    );
}
export const query = graphql`
{
    allContentfulInsightsPage(sort: {fields: updatedAt, order: ASC}) {
        edges {
          node {
            title
            image {
              fluid {
                src
                ...GatsbyContentfulFluid
                tracedSVG
              }
            }
            slug
            content {
              content
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

export default InsightPage