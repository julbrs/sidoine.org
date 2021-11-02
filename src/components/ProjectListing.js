import React from "react"
import GitHubButton from "react-github-btn"

const ProjectListing = props => {
  const { projects } = props

  return (
    <div className="container lg:px-24">
      {projects.map(project => (
        <div key={project.title}>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/6  h-12">
              <h3 className="text-2xl text-blue-500 font-bold leading-snug">
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.icon}
                  {` `}
                  {project.title}
                </a>
              </h3>
            </div>

            <div className="w-full lg:w-3/6  h-12">
              <p className="text-blue-900">{project.description}</p>
            </div>
            <div className="w-full lg:w-1/6 h-12">
              <GitHubButton
                href={project.source}
                data-size="large"
                data-show-count="false"
              >
                Source
              </GitHubButton>
            </div>
            <div className="w-full lg:w-1/6 h-12">
              {project.path && (
                <a
                  href={project.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-sm bg-transparent hover:bg-blue-500 text-blue-900 font-semibold hover:text-white px-2 border border-blue-500 hover:border-transparent rounded">
                    App Link
                  </button>
                </a>
              )}
            </div>
          </div>

          <div></div>
          <hr className="my-8 border-b-2 border-gray-200" />
        </div>
      ))}
    </div>
  )
}

export default ProjectListing
