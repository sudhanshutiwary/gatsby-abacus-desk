import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection';

// import { FaBeer } from 'react-icons/fa';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
      <section className="main-slider">
        <article className="main-contant">
          <BackgroundSection img={data.img.childImageSharp.fluid} title="default title"
          styleClass="default-background"/>
        </article>
      </section>
  </Layout>
);



export const query = graphql`
{
    img: file(relativePath: {eq: "homebackground.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage
