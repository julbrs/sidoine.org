import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter
} from "react-icons/fa"

export const Footer = () => {
  const {
    site: {
      meta: { social },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `)

  return (
    <footer className="bg-white">
      <div className="container pt-12 pb-12 flex flex-wrap text-center lg:flex-row-reverse lg:justify-between lg:items-center">
        <ul className="w-full lg:w-auto">
          <FooterIconLink
            href={social.twitter}
            icon={FaTwitter}
            label="Twitter"
          />
          <FooterIconLink
            href={social.linkedin}
            icon={FaLinkedinIn}
            label="LinkedIn"
          />
          <FooterIconLink
            href={social.github}
            icon={FaGithub}
            label="Github"
          />
        </ul>
        <div className="w-full lg:w-auto pt-6 lg:pt-0 text-blue-800 text-sm">
        © {new Date().getFullYear()}, built with {` `}
        <a href="https://www.gatsbyjs.org"><span role="img" aria-label="love">❤️</span></a>
        </div>
      </div>
    </footer>
  )
}

const FooterIconLink = ({ href, label, icon: Icon }) => {
  const linkParams = { href }

  if (href.startsWith("http")) {
    linkParams.target = "_blank"
    linkParams.rel = "noreferrer noopener"
  }

  return (
    <li className="inline-block px-2">
      <a
        {...linkParams}
        className="inline-flex h-8 w-8 border border-blue-800 text-blue-800 rounded-full items-center justify-center transition-colors duration-200 hover:text-white hover:bg-blue-400 hover:border-blue-400"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-3 h-3 fill-current" />
      </a>
    </li>
  )
}