import React, { Component } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"
import { Link } from "gatsby"

class SubmitRfp extends Component {
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
                    {this.state.items.map(({ node }) => {
                        return (
                            <section className="main-slider inner-banner">
                                <article
                                    className="slider-banner"
                                    style={{
                                        backgroundImage: `url(${node.image.file.url})`,
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
                                                    <h1>{node.title}</h1>
                                                </div>
                                                <div className="set-breadc">
                                                    <div class="innerbanner-breadcrumb">
                                                        <p><Link to="/">Home</Link> - <span>{node.title}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </section>
                        );
                    })}
                    <section className="content-part">
                        <div className="submit-rfp-page-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        {this.state.items.map(({ node }) => {
                                            return (
                                                <>
                                                    <div className="submit-rfp-main-contant">
                                                        <h2>{node.subTitle.subTitle}</h2>
                                                        <div className="submit-rfp-page-main-detail ">
                                                            {documentToReactComponents(node.content.json)}
                                                        </div>
                                                    </div>
                                                </>
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


const SubmitRfpPage = ({ data }) => {
    return (
        <>
            <header>
                <article className="top">
                    <div className="container">
                        <Navbar />
                    </div>
                </article>
            </header>
            <SubmitRfp items={data.allContentfulSubmitRfpPage} />
            <Footer items={data.allContentfulFooter} />
        </>
    );
}
export const query = graphql`
{
    allContentfulSubmitRfpPage {
        edges {
          node {
            title
            slug
            image {
              file {
                url
              }
            }
            subTitle {
              subTitle
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

export default SubmitRfpPage