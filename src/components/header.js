import { Link } from "gatsby"
import React from "react"
import Nav from "./nav"

const Header = () => {
  return (
    <header className={"header"}>
      <div className={"header-info"}>
        <Link className={"header-title"} to="/">
          Feel Anything
        </Link>
      </div>
      <Nav />
    </header>
  )
}

export default Header
