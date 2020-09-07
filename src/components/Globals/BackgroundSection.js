import React, { Component } from "react"
import { Carousel } from "react-bootstrap"
import Banner from "../../images/banner.jpg"


export default class BackgroundSection extends Component {
  constructor(props) {

    super(props);
    console.log(props);
    this.state = {
      items: props.items.edges,
      sliderItems: props.items.edges

    };

  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="main-slider">
          <article
            className="main-contant"
            style={{
              backgroundImage: `url(${Banner})`,
              height: `670px`,
              backgroundSize: `cover`,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              backgroundPosition: `100% 50%`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Carousel>
                    {this.state.items.map(({ node }) => {
                      return (
                        <Carousel.Item>
                          <div className="menu-contant mx-auto text-center">
                            <h1 className="title-banner animated fadeInDown" key={node.id}>{node.heading}</h1>
                            <p className="animated fadeInUp" key={node.id}>{node.sliderContent.sliderContent}</p>
                            <div className="contant-btn animated zoomInRight">
                              <a href={node.sliderButtonUrl}>
                                {node.sliderButton}
                                <img
                                  src="https://abacusdesk.com/wp-content/themes/abacusdesk/assets/img/abacus-icons/cta-arrow/Shape.png"
                                  alt="button arrow"
                                />
                              </a>
                            </div>
                          </div>
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>


                </div>
              </div>
            </div>
          </article>
        </section>
      );
    }
    else {
      return <h1>No Content</h1>;
    }
  }
}

