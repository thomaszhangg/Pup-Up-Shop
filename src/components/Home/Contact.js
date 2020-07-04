import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        {/* 10 cols wide xs ,s 8, med 6 */}
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/thomaszhang97@gmail.com"
            method="POST"
          >
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Theomas Zhang"
              />
            </div>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                email="email"
                id="email"
                placeholder="theomas@dog.com"
              />
            </div>
            {/* Description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="woof woof"
              />
            </div>
            {/* Submit */}
            <button type="submit" className="btn btn-yellow btn-block mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
