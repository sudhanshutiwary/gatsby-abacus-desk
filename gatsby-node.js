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
  const AboutPages = path.resolve(`./src/templates/about-page-design.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  return graphql(
    `
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
                    json
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
                    json
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
                    json
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


    const pages = result.data.allContentfulPage.edges
    const aboutpages = result.data.allContentfulAboutPage.edges
    const posts = result.data.allContentfulPost.edges


    pages.forEach((page, index) => {
      createPage({
        path: page.node.slug,
        component: Pages,
        context: {
          slug: page.node.slug
        },
      })
    })
    aboutpages.forEach((about, index) => {
      createPage({
        path: about.node.slug,
        component: AboutPages,
        context: {
          slug: about.node.slug
        },
      })
    })
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
