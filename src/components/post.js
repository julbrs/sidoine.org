import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import defaultImg from "../../content/assets/gatsby-icon.png"

import "../styles/main.css"

const Post = ({ node }) => {
  let featuredImgFluid = defaultImg
  if(node.frontmatter.featuredImage) {
    featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid
  }
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article key={node.fields.slug} className="outdoor-item">
      <header>
      <Link to={node.fields.slug}>
        <Img fluid={featuredImgFluid} />
        <h3>
          
            {title}
          
        </h3>
        </Link>
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
}

export default Post
