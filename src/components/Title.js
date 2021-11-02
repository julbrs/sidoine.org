import React from "react"
import { Link } from "gatsby"

const Title = props => {
  const { description, title, link, main } = props

  return (
    <div className="py-10 hero mb-4">
      <div className="container mx-auto px-6">
        {main && (
          <h1 className="text-4xl font-black mb-2 text-blue-800">{title}</h1>
        )}
        {!main && (
          <h2 className="text-4xl font-black mb-2 text-blue-800">{title}</h2>
        )}
        {description && (
          <h3 className="text-2xl mb-8 text-blue-700 text-right italic -mt-8">
            <span className="text-4xl font-black">&ldquo;</span>
            {description}
            <span className="text-4xl font-black">&rdquo;</span>
          </h3>
        )}
        {link && (
          <Link to={link}>
            <button className="bg-white text-blue-900 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
              See all
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Title
