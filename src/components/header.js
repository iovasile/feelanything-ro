import { Link } from "gatsby"
import React from "react"
import Nav from "./nav"

const Header = () => {
  return (
    <header className={"header"}>
      <Link className={"header-title"} to="/">
        Feel Anything
      </Link>
      <h5 className={"header-subtitle"}>by andrei lucan</h5>
    </header>
  )
}

export default Header
