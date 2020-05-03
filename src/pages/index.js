import React from "react"
import {  graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Cards from "../components/Cards"
import Title from "../components/Title"
import ProjectListing from "../components/ProjectListing"

import projects from "../../data/projects"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const outdoor = data.outdoor.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Index" />
      <Title 
        title="Projects"
        description="Actives open-source projects"
      />
      <ProjectListing projects={projects} />
      
      <Title 
        title="Outdoor"
        description="Des articles sur de belles sorties dont je veux garder une trace"
        link="blog"
      />
      <Cards nodes={outdoor} />
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
            ...CardImageFragment
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
