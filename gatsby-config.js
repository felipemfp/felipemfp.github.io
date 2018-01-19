module.exports = {
  siteMetadata: {
    title: 'Felipe Pontes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    }
  ],
};
