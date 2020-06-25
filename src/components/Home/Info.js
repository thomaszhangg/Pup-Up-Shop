import React from "react"
import { Link } from "gatsby"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Finding Forever Homes For Puppies For 20 Years! Since Pup-Up Shop
              was founded in 2000, we have been connecting healthy puppies with
              caring, loving families. Our Breeder Background Check ensures
              healthy and humane breeding practices…and a healthier, happier
              puppy for you! Contact us and find your perfect puppy today!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
