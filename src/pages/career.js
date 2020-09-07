import React, { Component } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"
import { Link } from "gatsby"

class Career extends Component {
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
                        <div className="contact-page-detail">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        {this.state.items.map(({ node }) => {
                                            return (
                                                <>
                                                    <div className="creer-page-head">
                                                        <h2>{node.title}</h2> </div>
                                                    <div className="contact-page-main-detail">
                                                        {documentToReactComponents(node.content.json)}
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-us-form">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <form action="https://formspree.io/sudhanshu@abacusdesk.co.in" method="POST">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="contact-form">
                                                        <input className="text-field-full" name="name" id="name" placeholder="Name*" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="contact-form">
                                                        <input className="text-field-full" name="email" id="email" placeholder="Email*" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="contact-form">
                                                        <input className="text-field-full" name="subject-name" id="subject-name" placeholder="Subject*" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="contact-form">
                                                        <input type="file" name="attach-resume" size="40" className="file-field-full" accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv" aria-invalid="false" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="contact-form-button">
                                                        <button type="submit" className="contact-submit-btn">SUBMIT</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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


const CareerPage = ({ data }) => {
    return (
        <>
            <header>
                <article className="top">
                    <div className="container">
                        <Navbar />
                    </div>
                </article>
            </header>
            <Career items={data.allContentfulCareerPage} />
            <Footer items={data.allContentfulFooter} />
        </>
    );
}
export const query = graphql`
{
    allContentfulCareerPage {
        edges {
          node {
            id
            title
            bannerImage {
              file {
                url
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

export default CareerPage