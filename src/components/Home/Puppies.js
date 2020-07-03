import React from "react"
import Puppy from "./Puppy"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"

export default function Products() {
  return (
    <StaticQuery
      query={graphql`
        {
          puppies: allContentfulPuppy {
            edges {
              node {
                id
                title
                price
                image {
                  fluid(maxHeight: 426) {
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return <h1>Hello World</h1>
      }}
    />
  )
}
