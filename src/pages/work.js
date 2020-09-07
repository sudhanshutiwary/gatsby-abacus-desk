import React, { Component } from "react";
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"
import Img from 'gatsby-image'
import { Link } from "gatsby"
import Insights from "../images/Insights.jpg"
import $ from 'jquery';
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
                                            <h1>work</h1>
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
                                                            onClick={() => { this.handleItems(category) }} >
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
    return (
        <>
            <header>
                <article className="top">
                    <div className="container">
                        <Navbar />
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
    work: allContentfulWork {
        edges {
          node {
            id
            title
            slug
            category
            image {
              fixed{
                src
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