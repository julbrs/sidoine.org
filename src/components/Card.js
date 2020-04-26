import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Card = props => {
    const {
        excerpt,
        fields: {
            slug
        },
        frontmatter: {
            date,
            featuredImage,
            title
        }
    } = props

  return (
    <div className="bg-white h-full shadow-md rounded-md overflow-hidden hover:bg-blue-100">
      <Link to={slug}>
        <div className="bg-blue-300">
          <Img fluid={featuredImage.childImageSharp.fluid} alt={title} />
        </div>
        <div className="p-5 pb-1">
          <h2 className="text-2xl text-blue-500 font-bold leading-snug">
            {title}
          </h2>
          <p className="text-sm text-blue-900 font-thin text-right">{date}</p>
          <p className="text-base text-blue-900 mb-5 font-medium">{excerpt}</p>
        </div>
      </Link>
    </div>
  )
}

export const query = graphql`
fragment CardImageFragment on File {
    childImageSharp {
        fluid(maxWidth: 640, maxHeight: 420, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid_withWebp
        }
    }
}
`

export default Card