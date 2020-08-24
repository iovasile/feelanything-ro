import React from "react"
import Image from "gatsby-image"
import { useState } from "react"

/*
  if blog has image, show image else title + excerpt
  if image showing, on hover, animate to title + excerpt
  also, opacity and read more button to appear only on title+excerpt part
*/

const BlogSummary = ({ data }) => {
  const [isHovering, setHoveringState] = useState(false)
  return (
    <div
      role="link"
      tabIndex="0"
      className="blog-summary"
      onMouseEnter={e => setHoveringState(true)}
      onMouseLeave={e => setHoveringState(false)}
    >
      {data.featuredImage != null ? (
        <Image
          className="blog-summary-image"
          style={isHovering ? { display: "none" } : { display: "block" }}
          fluid={data.featuredImage.node.localFile.childImageSharp.fluid}
        />
      ) : null}
      <p className="blog-date">{data.date}</p>
      <center className="pt-2 blog-title">{data.title}</center>
      <div
        className="blog-summary-body"
        dangerouslySetInnerHTML={{
          __html: data.excerpt.replace("[…]", "..."),
        }}
      />
    </div>
  )
}

export default BlogSummary
