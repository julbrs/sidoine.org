import React from "react"
import { Link } from "gatsby"
import { Footer }  from "./Footer"

import "typeface-merriweather"
import "../styles/main.css"
import {
  GiMountaintop,
} from "react-icons/gi"

const Layout = ({ location, title, children }) => {
  return (
    <>
    <header className="bg-white py-6">
      <div className="container text-center">
        <Link to="/" className="inline-block">
          <GiMountaintop size="5em"/>
        </Link>
      </div>
    </header>
    {children}
    <div className="bg-white py-8 lg:py-16 mt-8">
      <div className="container">
      </div> 
    </div>
    <Footer />
  </>
  )
}

export default Layout
