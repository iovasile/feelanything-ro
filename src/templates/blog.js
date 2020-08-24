import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import "../assets/main.sass"

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="blog">
        <div className="blog-info">
          <p className="blog-date" style={{ color: "black" }}>
            {data.wpPost.date}
          </p>
          <p className="blog-date" style={{ color: "black" }}>
            {data.wpPost.author.node.usernname ?? data.wpPost.author.node.name}
          </p>
        </div>
        <div className="blog-image-container">
          {data.wpPost.featuredImage != null ? (
            <Image
              className="blog-image"
              fluid={
                data.wpPost.featuredImage.node.localFile.childImageSharp.fluid
              }
            />
          ) : (
            <Image
              className="blog-image"
              fixed={data.file.childImageSharp.fixed}
            />
          )}
        </div>

        <h1 className="blog-title" style={{ color: "black" }}>
          {data.wpPost.title}
        </h1>

        <div
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      date(formatString: "DD MMMM, YYYY")
      content
      slug
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
      author {
        node {
          username
          name
        }
      }
    }
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

export default Blog
