import React from "react"
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <button className="footer-subscribe-button">subscribe!</button>
      <div className="footer-nav">
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

      <small className="footer-details">Andrei Marius Lucan</small>
      <small className="footer-details">© 2020. All rights reserved.</small>
    </div>
  )
}

export default Footer
