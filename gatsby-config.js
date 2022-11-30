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
    'gatsby-plugin-sass', 'gatsby-plugin-image', 'gatsby-plugin-sitemap', {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    }, 'gatsby-plugin-mdx', 'gatsby-transformer-remark', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
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
  ],
};
