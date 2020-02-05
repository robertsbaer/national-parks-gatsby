import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Carousel from "../components/carousel/Carousel"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <h1>Carousel Time</h1>
    <p>Try it out...</p>
    <Carousel images={ props.data } />
  </Layout>
)

export default IndexPage

export const carouselImageQuery = graphql`
  query {
    carouselImages: allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }    
        }
      }
    }
  }
`
