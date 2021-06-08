module.exports = {
	siteMetadata: {
		title: `Southland Merchants`,
		description: `Website for Southland Merchants Coffee`,
		author: `On Future Media`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: 'G-1856JT904G',
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: true,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: ['/preview/**', '/do-not-track/me/too/'],
				// Delays sending pageview hits on route update (in milliseconds)
				pageTransitionDelay: 0,
				// Enables Google Optimize using your container Id
				optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
				// Enables Google Optimize Experiment ID
				experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
				// Set Variation ID. 0 for original 1,2,3....
				variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
				// Any additional optional fields
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: 'southlandmerchants.com.au'
			}
		},
		`gatsby-plugin-theme-ui`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets`
			}
		},
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
				icon: `./src/assets/logo-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Avenir Next\:400,500,700`, `Roboto\:400,500,700`]
			}
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.southlandmerchants.com.au',
				sitemap: 'https://www.southlandmerchants.com.au/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: `gatsby-source-rss-feed`,
			options: {
				url: `https://medium.com/feed/@namoreira-nm`,
				name: `MediumData`
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
