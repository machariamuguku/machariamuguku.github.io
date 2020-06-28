require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  // base site data
  siteMetadata: {
    title: `Muguku`,
    owner: `Macharia Muguku`,
    description: `A Macharia Muguku software engineer portfolio website`,
    author: `Macharia Muguku <hello@muguku.co.ke>`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // github graphql api
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GITHUB",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`
        }
      }
    },
    // medium REST api
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@imash`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    // PWA manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `macharia_muguku_react_gatsby_portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/512x512.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
};
