import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Navbar from "../components/Globals/Navbar"
import FooterMain from "../components/Globals/Footer-main"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import Footer from "../components/Globals/Footer"

class logopageDesignTemplate extends React.Component {
    render() {
        const page = this.props.data.contentfulPage
        return (
            <layout location={this.props.location} title={page.title}>
                <header>
                    <article className="top">
                        <div className="container">
                            <Navbar />
                        </div>
                    </article>
                </header>
                <section className="Internal-page">
                    <section className="main-slider inner-banner">
                        <article
                            className="slider-banner"
                            style={{
                                backgroundImage: `url(${page.image.file.url})`,
                                height: `670px`,
                                backgroundSize: `cover`,
                                display: `flex`,
                                justifyContent: `center`,
                                alignItems: `center`,
                                backgroundPosition: `100% 50%`,
                            }}
                        >
                        </article>
                        <article className="internalmain-contant">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="banner-menu-contant">
                                            <h1>{page.title}</h1>
                                        </div>
                                        <div className="set-breadc">
                                            <div class="innerbanner-breadcrumb">
                                                <p><Link to="/">Home</Link> - <span>{page.title}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className="contant-part inner-pages">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8 crm-width">
                                    <div className="content-inner">
                                        <h2>{page.subHeading}</h2>
                                        {documentToReactComponents(page.content.json)}
                                        {/* <p dangerouslySetInnerHTML={{ __html: page.content.childContentfulRichText.html }}></p> */}
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </section>
                    <section className="only-in-pages">
                        <article className="dav-powders">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="single-page-client">
                                            <ul>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className="extra-content">
                                            <p>{page.footerContent.footerContent}</p>
                                            <h4>{page.footerSubContent}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </section>
                <FooterMain />

                {/* <h1>{page.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: page.content.childContentfulRichText.html }}></p> */}
            </layout>
        )
    }

}
export default logopageDesignTemplate

export const pageQuery = graphql`
    query PageBySlug($slug: String!){
        
        contentfulPage( slug: { eq: $slug}){
            title
            slug
            image {
              file {
                url
              }
            }
            subHeading
            content {
                json
            }
            footerContent {
              footerContent
            }
            footerSubContent
          }
        }
`