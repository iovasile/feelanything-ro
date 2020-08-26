import React from "react"

const LoadMore = ({ updateBlogCount, blogCount }) => {
  return (
    <center>
      <button
        onMouseDown={e => {
          e.preventDefault()
          updateBlogCount(blogCount + 3)
        }}
        className="load-more"
      >
        Load more
      </button>
    </center>
  )
}

export default LoadMore
