import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const PrivateBlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title='Private Blog'>
      <SEO title="Private Blog" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default PrivateBlogIndex

export const pageQuery = graphql`
query PrivateBlogQuery{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC},
      filter: {frontmatter: {}, fileAbsolutePath: {regex: "/(private-blog)/"}}) {
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
