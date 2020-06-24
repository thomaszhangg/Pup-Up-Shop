import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello Dog Lovers!</h1>
    <p>Are you ready to meet your forever friend ?</p>
    <FaGulp />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
