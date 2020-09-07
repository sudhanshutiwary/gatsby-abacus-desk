import React, { Component } from "react";
// import Title from "../Globals/Title";
// import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Arrow from "../../images/arrow_long_right.svg"

// import { Link } from "gatsby"/



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
        <section className="strategy">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="strategy-area">
                  <h1>Strategy & Execution</h1>
                  <p>
                    We are relentlessly customer-centric, for both you – our customers,
                    and for your customers. So every professional service we provide has
                    a ton of R&D and years of experience behind it.From web UIs to
                    complex ERP systems, we are capable of providing what your business
                    needs.
              </p>
                </div>
              </div>
            </div>
            <div className="row">
              {this.state.items.map(({ node }) => {
                return (
                  <div key={node.id} className="col-md-4">
                    <div className="strategy-list">
                      <h4>{node.title}</h4>
                      <ul><li>
                        {documentToReactComponents(node.content.json)}
                      </li></ul>
                      {/* {node.title}
                        {documentToReactComponents(node.content.json)} */}
                    </div>
                  </div>
                )
              })}
              <div className="col-md-4">
                <div className="strategy-list">
                  <h4>View our Work.</h4>
                  <a href="/work">
                    <img src={Arrow} alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

  }
}
