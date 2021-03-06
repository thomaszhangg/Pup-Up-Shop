import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Mission" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Welcome to Pup-Up Shop! 20 years ago, Thomas Zhang founded Pup-Up
              Shop with the intent to connect healthy puppies with caring
              families. Pup-Up shop does not condone Puppy Mills, and we
              strongly discourage against all breeding practices in which the
              health and well-being of innocent dogs and puppies are
              compromised. We run through an extensive and thorough process to
              ensure you find a quality breeder through our website. We offer a
              30-day health guarantee provided by every breeder. The adoption of
              a puppy is a big commitment. We suggest that you thoroughly
              research the breeds you are interested in. Feel free to email us
              at thomaszhang97@gmail.com or use our contact form for any
              questions.
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
