import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Title from "../components/Title"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Title title="All posts" />
      <div className="container">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h2 className="text-2xl text-blue-500 font-bold leading-snug">
                  <Link to={node.fields.slug}>{title}</Link>
                </h2>
                <p className="text-sm text-blue-900 font-thin">
                  {node.frontmatter.date}
                </p>
              </header>
              <section>
                <p
                  className="text-base text-blue-900 mb-5 font-medium"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
              <hr className="my-8 border-b-2 border-gray-200" />
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {}, fields: { collection: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
