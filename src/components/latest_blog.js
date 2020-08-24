import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const LatestBlog = ({ data }) => {
  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  const [excerptLength, setExcerptlength] = useState(data.excerpt.length)

  useEffect(() => {
    var length = window.innerWidth < 1366 ? window.innerWidth : 1366
    setExcerptlength(length)
  }, [data.excerpt.length])

  const regex = /(<([^>]+)>)/gi

  return (
    <div className="latest-blog">
      <h3 className="latest-blog-label">LATEST</h3>
      <p className="blog-date">{data.date}</p>
      <Link className="latest-blog-title" to={"/" + data.slug}>
        <center className="pt-2">{data.title}</center>
      </Link>
      <Link className="blog-summary-body-link" to={"/" + data.slug}>
        <div
          className="blog-summary-body"
          dangerouslySetInnerHTML={{
            __html:
              data.content
                .substring(0, excerptLength)
                .replace("[…]", "...")
                .replace(regex, "") + "...",
          }}
        />
      </Link>
    </div>
  )
}

export default LatestBlog
