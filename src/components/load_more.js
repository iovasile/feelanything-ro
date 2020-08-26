import React from "react"

const LoadMore = ({ updateBlogCount, blogCount }) => {
  return (
    <button
      onMouseDown={e => {
        e.preventDefault()
        updateBlogCount(blogCount + 3)
      }}
      className="load-more"
    >
      Load more
    </button>
  )
}

export default LoadMore
