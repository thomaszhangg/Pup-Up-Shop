import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaCartPlus } from "react-icons/fa"

// class based so we can manage state
export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  }
  navbarHandler = () => {}

  render() {
    return <div>navbar content</div>
  }
}
