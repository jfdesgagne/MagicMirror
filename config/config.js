/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.4.1/24"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Sammamish, USA",
				locationID: "5809402", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "351c13533129cf4ed9f31c383e6d66ce"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Sammamish, USA",
				locationID: "5809402", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "351c13533129cf4ed9f31c383e6d66ce"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: 'King 5',
						url: 'https://rssfeeds.king5.com/king5/home',
					},
					{
						title: 'The Seattle Times',
						url: 'https://www.seattletimes.com/feed/'
					},
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-Jast",
			position: "bottom_bar",
			config: {
				maxWidth: "100%",
				updateIntervalInSeconds: 300,
				fadeSpeedInSeconds: 50,
				scroll: "horizontal", // One of ["none", "vertical", "horizontal"]
				useGrouping: false,
				currencyStyle: "code", // One of ["code", "symbol", "name"]
				lastUpdateFormat: "HH:mm",
				showColors: true,
				showCurrency: true,
				showChangePercent: true,
				showChangeValue: false,
				showChangeValueCurrency: false,
				showLastUpdate: false,
				showPortfolioValue: false,
				showPortfolioGrowthPercent: false,
				showPortfolioGrowth: false,
				numberDecimalsValues: 2,
				numberDecimalsPercentages: 1,
				virtualHorizontalMultiplier: 2,
				stocks: [
					{ name: "AMZN", symbol: "AMZN", quantity: 259 },
					{ name: "NFLX", symbol: "NFLX", quantity: 20 },
					{ name: "NVDA", symbol: "NVDA", quantity: 80 },
					{ name: "SHOP", symbol: "SHOP", quantity: 10 },
					{ name: "ETSY", symbol: "ETSY", quantity: 50 },
				]
			}
		},
		{
			module: "octomirror-module",
			position: "top_center",
			config: {
				url: "http://octopi.local",
				api_key: "A65377E2BF034FE7B254BC78EE69C483",
				interactive: false,
				maxStreamHeight: 400
			},
		},
		{
			module: 'MMM-Remote-Control',
			// uncomment the following line to show the URL of the remote control on the mirror
			// position: 'bottom_left',
			// you can hide this module afterwards from the remote control itself
			config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				showModuleApiMenu: true, // Optional, Enable the Module Controls menu
				secureEndpoints: true, // Optional, See API/README.md
				// uncomment any of the lines below if you're gonna use it
				// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				// apiKey: "", // Optional, See API/README.md for details
				// classes: {} // Optional, See "Custom Classes" below
			}
		},
		{
			module: 'MMM-PIR-Sensor', 
			position: "top_center", // Remove this line to avoid having an visible indicator
			config: {
				sensorPin: 21,
				powerSavingDelay: 60, // Turn HDMI OFF after 60 seconds of no motion, until motion is detected again
				preventHDMITimeout: 4, // Turn HDMI ON and OFF again every 4 minutes when power saving, to avoid LCD/TV timeout
				supportCEC: true, 
				presenceIndicator: "fa-eye", // Customizing the indicator
				presenceOffIndicator: "fa-eye", // Customizing the indicator
				presenceIndicatorColor: "#f51d16", // Customizing the indicator
				presenceOffIndicatorColor: "#2b271c" // Customizing the indicator
			}
		},
		{
			module: "MMM-MyScoreboard",
			position: "bottom_left",
			classes: "default everyone",
			header: "Seattle sports",
			config: {
			  showLeagueSeparators: true,
			  colored: true,
			  viewStyle: "mediumLogos",
			  sports: [
				{
				  league: "NHL",
				  teams: ["SEA"],
				  groups: ["Pacific"]
				},
				{
				  league: "MLB",
				  teams: ["SEA"]
				},
				{
				  league: "NFL",
				  teams: ["SEA"]
				},
				{
					league: "MLS",
					teams: ["SEA"]
				}
			  ]
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
