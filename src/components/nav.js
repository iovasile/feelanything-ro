import React from "react"
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa"

const Nav = () => {
  return (
    <div className="header-nav">
      <a href="https://www.facebook.com/andreimariusss18">
        <FaFacebook className="social-icon" />
      </a>
      <a href="https://www.instagram.com/yourbooandrei">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://twitter.com/yourbooandrei">
        <FaTwitter className="social-icon" />
      </a>
      <a href="mailto:andrei.lucan96@gmail.com">
        <FaEnvelope className="social-icon" />
      </a>
    </div>
  )
}

export default Nav
