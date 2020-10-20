import React, { Component } from "react";

export const query = graphql`
{
  allContentfulPage{
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
} `;

class Search extends Component {
  constructor(props) {
    super(props);
    this.items = [
      'rahul',
      'sony',
      'dravidl',
      'sumit',
      'rahul',
    ];
    this.state = {
      suggestions: [],
    };
  }
  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.items.sort().filter(v => regex.test(v));
    }

    this.setState(() => ({ suggestions }));
  }
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((node) =>

          <li className="testimonial-sign1">{node}</li>
        )}
      </ul>
    );
  }
  render() {
    return (
      <>
        <input onChange={this.onTextChanged} type="text" />
        {this.renderSuggestions()}
        {/* <ul className="rrr">
          {this.state.items.map(({ node }) => {
            return (

              <li className="testimonial-sign">{node.title}</li>
            );
          })}
        </ul> */}
      </>
    )
  }
}


const SearchPage = ({ data }) => {
  return (
    <>
      <Search items={data.allContentfulPage} />
    </>
  );
}
export default SearchPage