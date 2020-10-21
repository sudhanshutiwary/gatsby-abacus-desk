import React, { Component } from "react";
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"
import { Link } from "gatsby"

class Testimonials extends Component {
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
                                        backgroundImage: `url(${node.bannerImage.file.url})`,
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

                </section>
            );
        }
    }
}

class Testimonialspost extends Component {
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
                <section className="testimonial-post">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="testimonial-post-content">
                                    <h2>TESTIMONIALS</h2>
                                    {this.state.items.map(({ node }) => {
                                        return (
                                            <div className="testimonials-post">
                                                <blockquote>{node.testimonialsContent.testimonialsContent}</blockquote>
                                                <p className="testimonial-sign">{node.title}<span>{node.name}</span></p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

const TestimonialsPage = ({ data }) => {
    return (
        <>
            <header>
                <article className="top">
                    <div className="container">
                        <Navbar />
                    </div>
                </article>
            </header>
            <Testimonials items={data.allContentfulTestimonialsPage} />
            <Testimonialspost items={data.allContentfulTestimonialsPost} />
            <Footer items={data.allContentfulFooter} />
        </>
    );
}
export const query = graphql`
{
    allContentfulTestimonialsPage {
        edges {
          node {
            title
            bannerImage {
              file {
                url
              }
            }
          }
        }
      }
      allContentfulTestimonialsPost(sort: {fields: updatedAt, order: ASC}) {
        edges {
          node {
            title
            testimonialsContent {
                testimonialsContent
            }
            name
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

export default TestimonialsPage