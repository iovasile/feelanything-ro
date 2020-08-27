import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import BlogSummary from "../components/blog_summary"

import "../assets/main.sass"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.wpPost.title}
        description={
          data.wpPost.date +
          " - Hi! I'm Andrei Lucan and I write about the things I like. I had a blast writing " +
          data.wpPost.title +
          " and I hope you'll enjoy reading it."
        }
      />
      <div className="blog">
        <h1 className="blog-title">{data.wpPost.title}</h1>

        <div
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
        />
        <div className="blog-footer">
          <p className="blog-date">{data.wpPost.date}</p>
          <div className="blog-divider"></div>
        </div>
        <br />
        <h1 className="read-more-title">more articles</h1>
        <div className="more-list">
          {data.allWpPost.edges.map(({ node }) => (
            <BlogSummary key={node.id} data={node} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $databaseId: Int!) {
    wpPost(slug: { eq: $slug }) {
      title
      date(formatString: "DD MMMM, YYYY")
      content
      slug
      databaseId
    }
    allWpPost(limit: 2, filter: { databaseId: { ne: $databaseId } }) {
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

export default Blog
