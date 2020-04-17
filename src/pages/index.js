import React from "react"
import {  graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import { rhythm } from "../utils/typography"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const nerd = data.nerd.edges
  const outdoor = data.outdoor.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1 style={{
        marginTop: rhythm(2),
      }}
      >Last nerds stuff</h1>
      {nerd.map(({ node }) => {
        return (
          <Post node={node}/>
        )
      })}

      <h1 style={{
        marginTop: rhythm(2),
      }}
      >Last outdoor things</h1>
      {outdoor.map(({ node }) => {
        return (
          <Post node={node}/>
        )
      })}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  outdoor: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC},
      limit: 5,
      filter: {frontmatter: {}, fileAbsolutePath: {regex: "/(outdoor)/"}}) {
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
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  nerd: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC},
      limit: 5,
      filter: {frontmatter: {}, fileAbsolutePath: {regex: "/(nerd)/"}}) {
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
