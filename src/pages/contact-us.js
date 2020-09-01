import React, { Component } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"
import { Link } from "gatsby"

class ContactUs extends Component {
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
                        <div className="contact-page-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        {this.state.items.map(({ node }) => {
                                            return (
                                                <>
                                                    <div className="contact-page-main-contant">
                                                        <p>{node.content.content}</p>
                                                        <p>{node.subContent.subContent}</p>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-page-detail">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        {this.state.items.map(({ node }) => {
                                            return (
                                                <div className="contact-page-main-detail">
                                                    {documentToReactComponents(node.contactDetail.json)}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="col-md-4">
                                        {this.state.items.map(({ node }) => {
                                            return (
                                                <div className="contact-page-main-detail">
                                                    {documentToReactComponents(node.contactDetail2.json)}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="col-md-3">
                                        {this.state.items.map(({ node }) => {
                                            return (
                                                <div className="contact-page-main-detail">
                                                    {documentToReactComponents(node.contactDetail3.json)}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-us-form">
                            <div className="container">
                                <div className="row">
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
                                                <div className="col-md-6">
                                                    <div className="contact-form">
                                                        <input className="text-field-full" name="email" id="email" placeholder="Email*" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="contact-form">
                                                        <input className="text-field-full" name="contact-no" id="contact-no" placeholder="Contact No.*" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="contact-form">
                                                        <input className="text-field-full" name="company-name" id="company-name" placeholder="Company Name*" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="contact-form">
                                                        <textarea className="textarea-field-full" name="message" id="message" placeholder="Message*"></textarea>
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
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            );
        }
    }
}


const ContactUsPage = ({ data }) => {
    return (
        <>
            <header>
                <article className="top">
                    <div className="container">
                        <Navbar />
                    </div>
                </article>
            </header>
            <ContactUs items={data.allContentfulContactUsPage} />
            <Footer items={data.allContentfulFooter} />
        </>
    );
}
export const query = graphql`
{
    allContentfulContactUsPage {
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
              content
            }
            subContent {
              subContent
            }
            contactDetail {
              json
            }
            contactDetail2 {
              json
            }
            contactDetail3 {
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

export default ContactUsPage