import React, { Component } from "react";
import Title from "../Globals/Title";
import { Link } from "gatsby"


// const getCategories = items => {
//   let temItems = items.map(items => {
//     return items.node.category;
//   });
//   let tempCategories = new Set(temItems);
//   let categories = Array.from(tempCategories);
//   categories = [...categories];
//   return categories;
// }

export default class Strategy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.edges,
      strategyItems: props.items.edges,
      // categories: getCategories(props).items.edges
    };
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="contant-part">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mx-auto text-center">
                <div className="Strategy">
                  <Title title="Strategy &amp; Execution"></Title>
                  <p>
                    We are relentlessly customer-centric, for both you – our
                    customers, and for your customers.
                <br /> So every professional service we provide has a ton of
                R&amp;D and years of experience behind it.
                <br /> From web UIs to complex ERP systems, we are capable of
                providing what your business needs.
              </p>
                </div>
              </div>
              {/* categories */}
              {/* <div className="categories-name">
                {this.state.categories.map((category, index) => {
                  return (
                    <div className="cat-name" key={index}>
                      {category}
                    </div>

                  );
                })}
              </div> */}
              {/* items */}
              <div className="stratagylink">
                {this.state.strategyItems.map(({ node }) => {
                  return (
                    <div key={node.id} className="col-md-3">
                      <div className="strategymenu-sec">
                        <Link to={node.url} className="">
                          {node.title}
                        </Link>
                        <p>{node.category}</p>
                        <p>{node.test}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      );
    }
    else {
      return (
        <div>hioii</div>
      );
    }

  }
}
