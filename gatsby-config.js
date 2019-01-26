module.exports = {
  siteMetadata: {
    title: 'aaron fuqua',
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'aaron-fuqua',
        short_name: 'fuqua',
        start_url: '/',
        background_color: '#fafafa',
        theme_color: '#008299', // #FF8F32
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
