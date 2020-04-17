import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const styles = {
  navbar: {
    listStyleType: `none`,
    marginBottom: rhythm(1),
    padding: 0,
  }
}

const Layout = ({ location, title, children }) => {
  let header = (
    <header>
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      <ul style={styles.navbar}>
        <li style={{display: `inline`, marginLeft: rhythm(1)}}><Link to={`/`}>Home</Link></li>
        <li style={{display: `inline`, marginLeft: rhythm(1)}}><Link to={`/blog`}>Blog</Link></li>
      </ul>
    </header>
    )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(36 ),
        padding: `${rhythm(1)} ${rhythm(0.5)}`,
      }}
    >
      {header}
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org"><span role="img" aria-label="love">❤️</span></a>
      </footer>
    </div>
  )
}

export default Layout
