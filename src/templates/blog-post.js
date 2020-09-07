// For Testing Template



import React, { Component } from 'react';
import { graphql } from 'gatsby';

class blogPostTemplate extends Component {
  render() {
    const post = this.props.data.contentfulPost
    return (
      <layout location={this.props.location} title={post.title}>
        <h1>{post.title}</h1>
        {/* <p dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }}></p> */}
      </layout>
    )
  }

}
export default blogPostTemplate
export const pageQuery = graphql`
    query PostBySlug($slug: String!){
        
        contentfulPost( slug: { eq: $slug}){
                    title
                    slug
                    content {
                      json
                    }
                    image {
                      fluid {
                        src
                      }
                    }
        }
    }
`
