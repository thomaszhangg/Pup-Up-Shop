import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

export default class Menu extends Component {
  constructor(props) {
    super(props)

    // For filtering
    this.state = {
      items: props.items.edges,
      puppyItems: props.items.edges,
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Essentials for your pal" />
            {/* categories */}
            {/* items */}
            <div className="row">
              {this.state.puppyItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    {/* item text */}
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">{node.title}</h6>
                        <h6 className="mb-0 text-yellow">
                          <small>${node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Essentials for your pal" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>No items to display yet... check back soon!</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
