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
  const devto = data.devto.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Index" />
      <Title 
        title="Articles"
        description="Content published on dev.to"
      />
      <div className="container">
        {devto.map((item, i) => (
            <article key={item.article.id}>
            <header>
              <h3 className="text-2xl text-blue-500 font-bold leading-snug">
                <a href={item.article.url}>
                  {item.article.title}
                </a>
              </h3>
              <p className="text-sm text-blue-900 font-thin">{item.article.published_at}</p>
            </header>
            <section>
              <p className="text-base text-blue-900 mb-5 font-medium">
                {item.article.description}
              </p>
            </section>
            <hr className="my-8 border-b-2 border-gray-200" />
          </article>
        ))}
      </div>


      <Title 
        title="Projects"
        description="Active projects"
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
  devto: allDevArticles(sort: {fields: article___published_at, order: DESC}, limit: 10) {
    nodes {
      article {
        id
        title
        url
        published_at(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }

}
`
