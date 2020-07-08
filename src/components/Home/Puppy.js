import React from "react"
import Img from "gatsby-image"

export default function Puppy({ puppy }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={puppy.image.fluid} className="card-img-top" />

        <div className="card-body text-center">
          <h6>{puppy.title}</h6>
          <h6>${puppy.price}</h6>

          <p className="text-muted">
            <small>{puppy.description}</small>
          </p>

          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={puppy.id}
            data-item-name={puppy.title}
            data-item-price={puppy.price}
            // data-item-description={puppy.description}
            data-item-image={puppy.image.fluid.src}
            data-item-url="pup-up-shop.netlify.app"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
