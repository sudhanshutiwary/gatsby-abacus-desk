import React, { Component } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import footer from '../../images/footer.jpg'


export default class Strategy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items.edges,
            strategyItems: props.items.edges,
        };
    }

    render() {

        if (this.state.items.length > 0) {
            return (
                <footer style={{ backgroundImage: `url(${footer})` }}>
                    <article className="heading-area-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col s12">
                                    <div className="menu-contant text-center">
                                        <h2>How can we help?</h2>
                                        <div className="contant-btn">
                                            <a href="https://abacusdesk.com/offices/">Let's talk <i class="fa fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className="container">
                        <div className="row">
                            {this.state.items.map(({ node }) => {
                                return (
                                    <div key={node.id} className="col-md-3">
                                        <div className="information-menus">
                                            <div className="foot-menu-area">
                                                <h4>{node.title}</h4>
                                                <ul><li>
                                                    {documentToReactComponents(node.footerContent.json)}
                                                </li></ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </footer>

            );
        }
        else {
            return (
                <> </>
            );
        }

    }
}
