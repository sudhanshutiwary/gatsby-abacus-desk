import React from "react"
import { Link, graphql } from "gatsby"
import "../components/layout.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection';
import Strategy from "../components/Home/Strategy";
import Client from "../components/Home/Client";


// import { FaBeer } from 'react-icons/fa';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home " />
      <section className="main-slider">
        <article className="main-contant">
          <BackgroundSection img={data.img.childImageSharp.fluid} title="default title"
          styleClass="default-background"/>
        </article>
      </section>
      <Strategy />
      <Client />
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