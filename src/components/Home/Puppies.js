import React from "react"
import Puppy from "./Puppy"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"

const getPuppies = graphql`
  {
    puppies: allContentfulPuppy {
      edges {
        node {
          id
          title
          price
          description
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Puppies() {
  return (
    <StaticQuery
      query={getPuppies}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Featured Puppies" />
              <div className="row">
                {data.puppies.edges.map(({ node: puppy }) => {
                  return <Puppy key={puppy.id} puppy={puppy} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
