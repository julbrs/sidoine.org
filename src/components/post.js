import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import defaultImg from "../../content/assets/gatsby-icon.png"

import { rhythm } from "../utils/typography"

const Post = ({ node }) => {
  let featuredImgFluid = defaultImg
  if(node.frontmatter.featuredImage) {
    featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid
  }
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article key={node.fields.slug}>
    <Img fluid={featuredImgFluid} />
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
}

export default Post
