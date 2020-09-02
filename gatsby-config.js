module.exports = {
  siteMetadata: {
    title: `Guy Munday's Portfolio`,
    description: `Front end development and digital design portfolio of Guy Munday.`,
    author: `Guy Munday`,
    // url: "https://www.doe.com", // No trailing slash allowed!
    // image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Inter",
            variable: true,
            weights: ["200..900"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guy Munday's Portfolio`,
        short_name: `Guy Munday`,
        start_url: `/`,
        background_color: `#17223b`,
        theme_color: `#17223b`,
        display: `minimal-ui`,
        icon: `src/assets/images/guyFavicon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-video-poster`,
            options: {
              width: 900,
            },
          },
        ],
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
