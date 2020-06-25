import React from "react"

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className="dispaly-4 text-uppercase font-weight-bold">{title}</h1>
      </div>
    </div>
  )
}