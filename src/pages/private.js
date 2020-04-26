import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Title from "../components/Title"

const PrivateBlog = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title='Private Blog'>
      <SEO title="Private Blog" />
      <Title 
        title="Private blog"
        description="Do not share this link ;)"
      />
      <div className="container">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3 className="text-2xl text-blue-500 font-bold leading-snug">
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <p className="text-sm text-blue-900 font-thin">{node.frontmatter.date}</p>
            </header>
            <section>
              <p className="text-base text-blue-900 mb-5 font-medium"
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

export default PrivateBlog

export const pageQuery = graphql`
query PrivateBlogQuery{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC},
      filter: {frontmatter: {}, fileAbsolutePath: {regex: "/(private)/"}}) {
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
