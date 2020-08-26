import React from "react"
import { Link } from "gatsby"

const BlogSummary = ({ data }) => {
  return (
    <div className="blog-summary">
      <Link className="pt-2 blog-summary-title" to={"/" + data.slug}>
        {data.title}
      </Link>
      <div
        className="blog-summary-body"
        dangerouslySetInnerHTML={{
          __html: data.content.substring(0, 300) + "...",
        }}
      />
      <div className="blog-summary-footer">
        <p className="blog-summary-date">{data.date}</p>
        <div className="blog-summary-divider"></div>
      </div>
    </div>
  )
}

export default BlogSummary
