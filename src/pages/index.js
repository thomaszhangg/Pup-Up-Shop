import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello Dog Lovers!</h1>
    <p>Are you ready to meet your forever friend ?</p>
    <FaGulp />
  </Layout>
)

export default IndexPage
