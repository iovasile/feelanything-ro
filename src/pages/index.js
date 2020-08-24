import React from "react"

import Layout from "../components/layout"
import LatestBlog from "../components/latest_blog"
import BlogSummary from "../components/blog_summary"
import Subscribe from "../components/subscribe"

import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { useState } from "react"
import LoadMore from "../components/load_more"

import "../assets/main.sass"

const IndexPage = ({ data }) => {
  const [blogCount, updateBlogCount] = useState(8)

  return (
    <Layout>
      <SEO title="Home" />

      <LatestBlog data={data.allWpPost.edges[0].node} />

      <Subscribe />
      <div className="blog-list">
        {data.allWpPost.edges.slice(1, blogCount + 1).map(({ node }) => (
          <div className="blog-summary-border" key={node.id}>
            <BlogSummary data={node} />

            <Link className="blog-summary-link" to={"/" + node.slug}>
              <p className="blog-summary-read-more">read more</p>
            </Link>

            {/* <div className="blog-summary-divider"></div> */}
          </div>
        ))}
      </div>
      {blogCount < data.allWpPost.edges.length - 1 ? (
        <LoadMore updateBlogCount={updateBlogCount} blogCount={blogCount} />
      ) : (
        <p className="no-more-posts">No more posts to load!</p>
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
          excerpt
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
