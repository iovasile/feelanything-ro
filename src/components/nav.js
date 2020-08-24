import React from "react"
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa"

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
    </div>
  )
}

export default Nav
