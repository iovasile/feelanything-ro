import React from "react"

import Layout from "../components/layout"
import BlogSummary from "../components/blog_summary"
import Subscribe from "../components/subscribe"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import { useState } from "react"
import LoadMore from "../components/load_more"

import "../assets/main.sass"

const IndexPage = ({ data }) => {
  const [blogCount, updateBlogCount] = useState(9)

  return (
    <Layout>
      <SEO
        title="Home"
        description="Hi! I'm Andrei Lucan and I write about the things I like. Welcome to my blog!"
      />

      <div className="blog-list">
        {data.allWpPost.edges
          .slice(0, blogCount)
          .map(({ node }, i) =>
            i === 4 ? (
              <Subscribe key={"subscribe"} />
            ) : (
              <BlogSummary key={node.id} data={node} />
            )
          )}
      </div>
      {blogCount < data.allWpPost.edges.length - 1 ? (
        <center>
          <LoadMore updateBlogCount={updateBlogCount} blogCount={blogCount} />
        </center>
      ) : (
        <p className="no-more-posts">
          You've reached the end of the list. Please consider subscribing to
          receive an email every time I write a new story.
        </p>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          date(formatString: "DD MMMM, YYYY")
          title
          slug
          content
        }
      }
    }
  }
`

export default IndexPage
