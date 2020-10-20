import React, { Component } from "react";
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"
import Img from 'gatsby-image'
import { Link } from "gatsby"
import Insights from "../images/Insights.jpg"
import $ from 'jquery';
import Search from "../pages/search"
import { FaLongArrowAltRight } from "react-icons/fa"




const getCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category;
    });
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories);
    categories = ['E-commerce', ...categories];
    categories = ['all', ...categories];
    return categories;
}

class Work extends Component {
    componentDidMount() {
        $('ul.tabs .tab').on('click', function () {
            $('ul.tabs .tab.current').removeClass('current');
            $(this).addClass('current');
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            items: props.items.edges,
            workItems: props.items.edges,
            categories: getCategories(props.items.edges)
        };
    }
    handleItems = (category) => {
        let tempItems = [...this.state.items];
        if (category === "all") {
            this.setState(() => {
                return { workItems: tempItems }
            })
        }
        else {
            let items = tempItems.filter(({ node }) => node.category === category);
            this.setState(() => {
                return { workItems: items }
            })
        }
    };

    render() {
        // console.log(this.state.categories)
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
                                            <h1>Work</h1>
                                        </div>
                                        <div className="set-breadc">
                                            <div class="innerbanner-breadcrumb">
                                                <p><Link to="/">Home</Link> - <span>Work</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className="work-content-part">
                        <div className="work-page-detail">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="select-box">
                                            <p>
                                                Filter By:
						                    </p>
                                            <ul className="tabs">
                                                {this.state.categories.map((category, index) => {
                                                    return (

                                                        <li className={"tab tab" + category} handleChange={this.handleChange} type="button"
                                                            key={index}
                                                            onClick={() => { this.handleItems(category) }}
                                                            onKeyDown={this.handleKeyDown} >
                                                            {category}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                        <div class="our-work-heading">
                                            <h2>
                                                Our Work
						                    </h2>
                                        </div>

                                    </div>

                                </div>
                                <div className="row">

                                    {this.state.workItems.map(({ node }) => {
                                        return (
                                            <div key={node.id} className="col-md-6">

                                                <Link to={node.slug}>
                                                    <div className="business-items">
                                                        <div className="hover-like">
                                                            <div className="img-work">
                                                                <Img fixed={node.image.fixed} />
                                                                <div class="overlay-in">
                                                                    <p>
                                                                        {node.title}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="right-hover">
                                                                <FaLongArrowAltRight />
                                                            </div>
                                                            <h2>{node.title}</h2>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section >
                </section >
            );
        }
    }
}


const WorkPage = ({ data }) => {
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
        <>
            <header>
                <article className="top">
                    <div className="container">
                        <Navbar />
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
                    </div>
                </article>
            </header>
            <Work items={data.work} />
            <Footer items={data.allContentfulFooter} />
        </>
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
    work: allContentfulWork {
        edges {
          node {
            id
            title
            slug
            category
            image {
              fixed{
                ...GatsbyContentfulFixed_tracedSVG
              }
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

export default WorkPage