import React from "react"
import { Link } from "gatsby"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa"

const Nav = () => {
  return (
    <div className="header-nav">
      <a href="https://facebook.com">
        <FaFacebook className="social-icon" />
      </a>
      <a href="https://instagram.com">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://twitter.com">
        <FaTwitter className="social-icon" />
      </a>
      <a href="mailto:mail.iovasile@gmail.com">
        <FaEnvelope className="social-icon" />
      </a>
      <Link to="/about">
        <FaUserCircle className="social-icon" />
      </Link>
    </div>
  )
}

export default Nav
