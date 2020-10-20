import React, { Component } from "react";

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
} `;

class Search extends Component {
  constructor(props) {
    super(props);

    // this.items = [
    //   'rahul',
    //   'sony',
    //   'dravidl',
    //   'sumit',
    //   'rahul',
    // ];
    // console.log(this.items);
    this.state = {
      // items: props.items.edges,
      items: props.items,
      suggestions: [],
    };
    console.log(this.state.items);
    // let items1 = [];
    // let items2 = [];
    // for (let index = 0; index < this.state.items.length; index++) {

    //   // console.log(this.state.items[index].node.title);
    //   this.items1 = items2.push(this.state.items[index].node.title);
    // }

    // console.log(items2);
    // this.items1 = items2;
    // console.log(this.items1);
  }
  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.state.items.sort().filter(v => regex.test(v.title)).map(values => (values));
    }
    console.log(suggestions);

    this.setState(() => ({ suggestions }));
  }
  renderSuggestions() {
    console.log(this.state.suggestions);
    // const { suggestions } = this.state;
    // console.log(suggestions);
    // if (suggestions.length === 0) {
    //   return null;
    // }
    return (
      <ul>
        {this.state.suggestions.map((node) =>

          <li className="testimonial-sign1"><a href={node.url}>{node.title}</a></li>
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
  items3.push({ 'title': "mInsight", 'url': "/insight/" });
  items3.push({ 'title': "G Suite", 'url': "/g-suite/" });
  items3.push({ 'title': "CRM", 'url': "/crm/" });
  items3.push({ 'title': "Career", 'url': "/career/" });
  items3.push({ 'title': "Contact Us", 'url': "/contact-us/" });
  items3.push({ 'title': "Submit Rfp", 'url': "/submit-rfp/" });
  items3.push({ 'title': "Testimonials", 'url': "/testimonials/" });
  console.log(items3);
  // this.items1 = items3;
  // console.log(this.items1);


  return (
    <>
      {/* <Search items={data.allContentfulPage} /> */}
      <Search items={items3} />

      {/* <Search items={data.allContentfulPost} /> */}
    </>
  );
}
export default SearchPage