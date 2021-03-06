/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "sv",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
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
			module: "googlecalendar",
			position: "top_center",   // This can be any of the regions.
			header: "Upkommande evenemang",
			config: {
				maximumEntries: 10
			}
		},
		{
			module: "mm-hsl-timetable",
			position: "top_left",
			header: "Busstidtabell",
			config: {
				stops: [1383134],
				busCount: 5
			}
		},
		{
			module: "MMM-RTSPStream",
			position: "middle_center",
			header: "Frontdoor",
				config: {
				alarmStatusUrl: 'http://localhost:5000/frontdoorAlarm',
				autoStart: false,
				rotateStreams: true,
				rotateStreamTimeout: 10,
				moduleWidth: 992,
				moduleHeight: 752,
				localPlayer: 'omxplayer',
				remotePlayer: 'none',
				showSnapWhenPaused: false,
				remoteSnaps: false,
				stream1: {
					name: 'Frontdoor',
					url: 'rtsp://admin:essokatten75@192.168.1.113:88/videoMain',
					frameRate: 'undefined',
					width: 960,
					height: 720,
					ffmpegPort: 9999,
					shutdownDelay: 10000,
					hideFfmpegOutput: true,
					},
				}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Helsinki",
				locationID: "658225", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "c7e3600a20e2c0babfce32babb89618b"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Väderprognos",
			config: {
				location: "Helsinki",
				locationID: "658225", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "c7e3600a20e2c0babfce32babb89618b"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Svenska Yle",
						url: "https://svenska.yle.fi/nyheter/senaste-nytt.rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
