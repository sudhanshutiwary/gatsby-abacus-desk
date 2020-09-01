require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
    siteMetadata: {
        title: `Abacus Desk`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                custom: {
                    families: ['Atlas Grotesk', 'Mallory'],
                    urls: ['/static/font/global.css'],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                src: 'https://browser.sentry-cdn.com/5.15.4/bundle.min.js',
                integrity: 'sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB',
                crossorigin: 'anonymous',
                onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
            },
            options: {
                src: '/src/js/aos.js', // Change to the script filename
            },
            options: {
                src: '/src/js/cssmenujs.js', // Change to the script filename
            },
            options: {
                src: '/src/js/global.js', // Change to the script filename
            },
            options: {
                src: '/src/js/jquery.min.js.js', // Change to the script filename
            },
            options: {
                src: '/src/js/materialize.min.js', // Change to the script filename
            },
            options: {
                src: '/src/js/owl.carousel.js', // Change to the script filename
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        `@contentful/gatsby-transformer-contentful-richtext`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}