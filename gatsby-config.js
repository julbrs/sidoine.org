module.exports = {
  siteMetadata: {
    title: `Sidoine.org`,
    author: {
      name: `Julien Bras`,
      summary: `who write about things. He lives actually in Montreal, QC.`,
    },
    description: `A blog.`,
    siteUrl: "https://sidoine.org",
    social: {
      twitter: `https://twitter.com/@_julbrs`,
      linkedin: `https://www.linkedin.com/in/julienbras/`,
      github: `https://github.com/julbrs`,
    },
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/private`,
        name: `private`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 850,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [
          { userAgent: "*", disallow: "/private/" },
          { userAgent: "*", allow: "/" },
        ],
      },
    },
    {
      resolve: "gatsby-source-dev",
      options: {
        // This is your username on Dev.to
        username: "julbrs",
      },
    },
  ],
}
