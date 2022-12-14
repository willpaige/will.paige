/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Will Paige - Engineer',
    description: 'Will Paige is a Uk based senior software engineer, currently working for NatWest Rooster Money',
    twitterUsername: '@_willPaige',
    siteUrl: 'https://will.paige.me.uk/',
    image: 'src/images/icon.png',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap', {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "G-B48DL324HB", // Google Analytics / GA
    //     ],
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Delays processing pageview events on route update (in milliseconds)
    //       delayOnRouteUpdate: 0,
    //     },
    //   },
    // },
  ],
  partytownProxiedURLs: [
    `https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_KEY}`,
  ],
};
