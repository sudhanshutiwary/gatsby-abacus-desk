const path = require('path')

// Testing Post this Function
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    return graphql(
        `
        {
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
          }
          `

    ).then(result => {
        if (result.errors) {
            throw (result.errors)
        }

        const posts = result.data.allContentfulPost.edges

        posts.forEach((post, index) => {
            createPage({
                path: post.node.slug,
                component: blogPost,
                context: {
                    slug: post.node.slug
                },
            })
        })
    })

}


// logo design page


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const Pages = path.resolve(`./src/templates/logo-page-design.js`)
    return graphql(
        `
        {
            allContentfulPage {
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
          }
          
          `

    ).then(result => {
        if (result.errors) {
            throw (result.errors)
        }

        const pages = result.data.allContentfulPage.edges

        pages.forEach((page, index) => {
            createPage({
                path: page.node.slug,
                component: Pages,
                context: {
                    slug: page.node.slug
                },
            })
        })
    })

}
