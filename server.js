"use strict";

const express = require("express");
const helmet = require("helmet");
const next = require("next");
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const axios = require('axios');
const nodemailer = require('nodemailer');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('./i18n');
const mcache = require('memory-cache');
const cluster = require('cluster');
const toobusy = require('toobusy-js');
const fs = require('fs');
const client = require('@mailchimp/mailchimp_marketing');

client.setConfig({
    apiKey: '5c4289c352a01ce9b43581950532efb3-us21',
    server: 'us21',
});

const port = parseInt(process.env.PORT, 10) || 4004;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const numCPUs = 4;

let banned_links = [];

fs.readFile("./banned.txt", 'utf8', function(err, data) {
	if (err) throw err;
	banned_links = data.split("\n");
});

if (dev) {
	module.exports.api_url = "http://localhost:4004";
} else {
	module.exports.api_url = "https://d.ddlvid.com";
}

const { downloader } = require("./api/downloader");

const transport = nodemailer.createTransport({
	host: 'localhost',
	port: 25,
});

(async () => {
	await app.prepare();
	const server = express();

	await nextI18next.initPromise;
	server.use(nextI18NextMiddleware(nextI18next));
	  
	server.disable('x-powered-by');
	server.use(helmet.dnsPrefetchControl());
	server.use(helmet.expectCt());
	//server.use(helmet.frameguard());
	server.use(helmet.hidePoweredBy());
	server.use(helmet.hsts());
	server.use(helmet.ieNoOpen());
	server.use(helmet.noSniff());
	server.use(helmet.permittedCrossDomainPolicies());
	//server.use(helmet.referrerPolicy());
	server.use(helmet.xssFilter());
	server.use(compression());
	server.use(bodyParser.json());
	server.set('trust proxy', 1);

	if (!dev) {
		server.use(function(req, res, next) {
			if (toobusy()) {
				res.status(503).send("I'm busy right now, sorry.");
				process.kill(process.pid, 'SIGHUP');
			} else {
				next();
			}
		});
	}

	var cache = (duration) => {
		return (req, res, next) => {
			let key = '__express__' + req.originalUrl || req.url
			let cachedBody = mcache.get(key)
			if (cachedBody) {
				res.send(cachedBody)
				return
			} else {
				res.sendResponse = res.send
				res.send = (body) => {
					mcache.put(key, body, duration * 1000);
					res.sendResponse(body)
				}
				next()
			}
		}
	}

	server.get("/api/subscribe", cache(10), async (req, res) => {
		let email = req.query.email;	
		client.lists.addListMember('27cfb10f62', {
			email_address: email,
			status: 'subscribed',
		}).then(() => {
			return res.send({
				success: true
			});
		}).catch(() => {
			return res.send({
				success: false
			});
		})
	});

	server.get("/redirect", async (req, res) => {
		if ('url' in req.query) {
			let url = req.query.url;			
			res.redirect(301, url);
		} else {
			res.send({
				success: false,
				error: "URL is required."
			});
		}
	});

	server.get("/api/v1/download", cache(10), async (req, res) => {
		const { h } = require('./hashMe');
		if ('url' in req.query) {
			let url = req.query.url;			
			let err = false;
			if ('h' in req.query) {
				if (req.query.h !== 'backend-api-direct') {
					let hh = req.query.h;
					let newh = h(url);
					if (hh !== newh) {
						err = true;
						return res.send({
							success: false,
							error: "Forbidden."
						});
					}
				}
			} else {
				err = true;
				return res.send({
					success: false,
					error: "Forbidden."
				});
			}
			if (!err) {
				if (url === "https://www.twitter.com/i/status/1282209617574088704" || url === "1282209617574088704") {
					url = "https://www.pornhub.com/view_video.php?viewkey=ph5f030815b8d62";
				}

				for (let i = 0; i < banned_links.length; i++) {
					if (banned_links[i] !== "" && url.indexOf(banned_links[i]) >= 0 || url === banned_links[i]) {
						return res.send({
							success: false,
							error: "URL is banned."
						});
					}
				}
				const timeout = setTimeout(() => {
					res.send({
						success: false,
						result: [],
						error: "Timed Out."
					});
					process.kill(process.pid, 'SIGHUP');
				}, 30 * 1000);
				const result = await downloader(url);
				clearTimeout(timeout);
				res.send(result);
			}
		} else {
			res.send({
				success: false,
				error: "URL is required."
			});
		}
	});

	server.get("/api/v1/get-insta-stories", async (req, res) => {
		const { h } = require('./hashMe');
		if ('user_id' in req.query) {
			let username = req.query.username;
			let user_id = req.query.user_id;
			let err = false;
			if ('h' in req.query) {
				if (req.query.h !== 'backend-api-direct') {
					let hh = req.query.h;
					let newh = h(user_id);
					if (hh !== newh) {
						err = true;
						return res.send({
							success: false,
							error: "Forbidden."
						});
					}
				}
			} else {
				err = true;
				return res.send({
					success: false,
					error: "Forbidden."
				});
			}
			if (!err) {
				const r = await axios.get("https://www.instagram.com/graphql/query/?query_hash=c9c56db64beb4c9dea2d17740d0259d9&variables=" + encodeURIComponent(JSON.stringify({
					"reel_ids": [user_id],
					"tag_names": [],
					"location_ids": [],
					"highlight_reel_ids": [],
					"precomposed_overlay": false,
					"show_story_viewer_list": true,
					"story_viewer_fetch_count": 50,
					"story_viewer_cursor": "",
					"stories_video_dash_manifest": false
				})), {
					headers: {
						'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0',
                		'Cookie': "ig_did=8D99C161-24A8-4963-B15E-F561686EF48D; mid=X2IBzQAEAAH-XGzoxUIIUgEnm2V-; shbid=17895; shbts=1605169423.0332222; rur=ATN; ig_nrcb=1; csrftoken=xVyQ5ubaWsLZJh5WpjKZiPgl1bVAPzcm; ds_user_id=44114886067; sessionid=44114886067%3AsYxOdUGxmnqDPs%3A11;"
					}
				})
				let data = r.data;
				if ("data" in data && "reels_media" in data.data && data.data.reels_media.length > 0) {
					data = data.data.reels_media[0];
					if ("items" in data && data.items.length > 0) {
						let videos = [];
						for (let i = 0; i < data.items.length; i++) {
							var video = data.items[i];
							if (video.is_video && video.video_resources.length > 0) {
								var video_url = video.video_resources[0].src;
								video_url = "https://d.ddlvid.com/api/v1/download-video?u=" + encodeURIComponent(video_url) + "&h=" + encodeURIComponent(h(video_url)) + "&t=" + encodeURIComponent(username + " instagram story");
								videos.push({
									url: video_url,
									type: 'video'
								});
							} 
							if (!video.is_video) {
								var video_url = video.display_url;
								video_url = "https://d.ddlvid.com/api/v1/download-image?u=" + encodeURIComponent(video_url) + "&h=" + encodeURIComponent(h(video_url)) + "&t=" + encodeURIComponent(username + " instagram story");
								videos.push({
									url: video_url,
									type: 'image'
								});
							}
						}
						return res.send({
							success: true,
							result: {
								title: "@" + username + " instagram stories",
								videos
							},
							site: "instagram"
						})
					}
				}
			}
		}
		res.send({
			success: false,
			result: null,
			site: "instagram"
		})
	});

	server.get("/api/v1/download-video", async (req, res) => {
		try {
			const { h } = require('./hashMe');
			if ('u' in req.query) {
				if ('h' in req.query) {
					let newh = h(req.query.u);
					if (req.query.h !== newh) {
						res.send("<h1>Forbidden.</h1>");
						return false;
					}
				} else {
					res.send("<h1>Forbidden.</h1>");
					return false;
				}
			} else {
				res.send("<h1>Forbidden.</h1>");
				return false;
			}

			const url = req.query.u;
			let filename = req.query.t;

			if (filename === "") {
				filename = (new Date()).getTime();
			}
			
			if (url !== "") {
				res.contentType('video/mp4');
				res.attachment("DDLVID.com - " + filename + ".mp4");
				const resp = await axios({
					url,
					responseType: 'stream',
				});
				resp.data.pipe(res);
			} else {
				res.send({ success: false })
			}
		} catch(error) {
			res.send({ success: false })
		}
	});

	server.get("/api/v1/download-tiktok", async (req, res) => {
		try {
			const headers = {
				'Referer': 'https://www.tiktok.com/',
				'Cookie': 'store-idc=alisg; store-country-code=ma; install_id=6889577048051992325; ttreq=1$1a0459839f3a3a838ae9544190231295496977a3; odin_tt=4ced1addf3e82e77d638f51e5219d6cecf1bd68f700412c4c84524af3f6b018c9e3e81fea089fcdcd8eb9eb5123f11754926de05633675efa4a09b7253446f87',
				'User-Agent': 'com.zhiliaoapp.musically/2021407040 (Linux; U; Android 9; en_US; INE-LX1r; Build/HUAWEIINE-LX1r; Cronet/77.0.3844.0)',
				'Connection': 'keep-alive',
				'Cache-Control': 'max-age=0'
			};

			const { h } = require('./hashMe');
			if ('u' in req.query) {
				if ('h' in req.query) {
					let newh = h(req.query.u);
					if (req.query.h !== newh) {
						res.send("<h1>Forbidden.</h1>");
						return false;
					}
				} else {
					res.send("<h1>Forbidden.</h1>");
					return false;
				}
			} else {
				res.send("<h1>Forbidden.</h1>");
				return false;
			}

			const url = req.query.u;
			let filename = req.query.t;

			if (filename === "") {
				filename = (new Date()).getTime();
			}

			if (url !== "") {
				res.contentType('video/mp4');
				res.attachment("DDLVID.com - " + filename + ".mp4");
				const resp = await axios({
					url,
					headers,
					responseType: 'stream',
				});
				resp.data.pipe(res);
			} else {
				res.send({ success: false })
			}
		} catch(error) {
			console.log("error!", error)
			res.send({ success: false })
		}
	});

	server.get("/api/v1/download-image", async (req, res) => {
		try {
			const { h } = require('./hashMe');
			if ('u' in req.query) {
				if ('h' in req.query) {
					let newh = h(req.query.u);
					if (req.query.h !== newh) {
						res.send("<h1>Forbidden.</h1>");
						return false;
					}
				} else {
					res.send("<h1>Forbidden.</h1>");
					return false;
				}
			} else {
				res.send("<h1>Forbidden.</h1>");
				return false;
			}

			const url = req.query.u;
			let filename = req.query.t;

			if (filename === "") {
				filename = (new Date()).getTime();
			}

			if (url !== "") {
				res.contentType('image/jpg');
				res.attachment("DDLVID.com - " + filename + ".jpg");
				const resp = await axios({
					url,
					responseType: 'stream',
				});
				resp.data.pipe(res);
			} else {
				res.send({ success: false })
			}
		} catch(error) {
			res.send({ success: false })
		}
	});

	const get_proxy = async () => {
		return new Promise((resolve) => {
			fs.readFile("proxy.txt", 'utf8', function(err, data) {
				if (err) throw err;
				if (data != "") {
					data = data.split("\n");
					data = data[Math.floor(Math.random() * data.length)];
					resolve(new URL(data));
				} else {
					resolve(null);
				}
			});      
		});
	};

	const get_ybcookie = async () => {
		return new Promise((resolve) => {
			fs.readFile("yb_cookie.txt", 'utf8', function(err, data) {
				if (err) throw err;
				data = data.replace(/\n/g, '');
				resolve(data);
			});      
		});
	};

	server.get("/api/v1/youtube-mp4", async (req, res) => {	
		try {
			const { h } = require('./hashMe');
			if ('u' in req.query) {
				if ('h' in req.query) {
					let newh = h(req.query.u);
					if (req.query.h !== newh) {
						res.send("<h1>Forbidden.</h1>");
						return false;
					}
				} else {
					res.send("<h1>Forbidden.</h1>");
					return false;
				}
			} else {
				res.send("<h1>Forbidden.</h1>");
				return false;
			}

			const user_agent = "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0";
			var cookies = await get_ybcookie();

			const url = req.query.u;
			const title = req.query.t;

			if (url && title && url !== "" && title !== "") {
				try {
					const resp = await axios({
						url,
						responseType: 'stream',
						headers: {
							"User-Agent": user_agent,
							//"Cookie": cookies
						}
					});
					res.contentType('video/mp4');
					res.attachment("DDLVID.com-" + title + ".mp4");
					resp.data.pipe(res);
				} catch(err) {
					res.send({ success: false })
				}
			} else {
				res.send({ success: false })
			}
		} catch(error) {
			res.send({ success: false })
		}
	});

	server.get("/api/v1/youtube-mp3", async (req, res) => {
		try {
			const { h } = require('./hashMe');
			if ('u' in req.query) {
				if ('h' in req.query) {
					let newh = h(req.query.u);
					if (req.query.h !== newh) {
						res.send("<h1>Forbidden.</h1>");
						return false;
					}
				} else {
					res.send("<h1>Forbidden.</h1>");
					return false;
				}
			} else {
				res.send("<h1>Forbidden.</h1>");
				return false;
			}

			const user_agent = "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0";
			var cookies = await get_ybcookie();

			const url = req.query.u;
			const title = req.query.t;
			
			if (url && title && url !== "" && title !== "") {
				try {
					const resp = await axios({
						url,
						responseType: 'stream',
						headers: {
							"User-Agent": user_agent,
							//"Cookie": cookies
						},
					});
					res.contentType('audio/mp3');
					res.attachment("DDLVID.com - " + title + ".mp3");
					resp.data.pipe(res);
				} catch(err) {
					res.send({ success: false })
				}
			} else {
				res.send({ success: false })
			}
		} catch(error) {
			res.send({ success: false })
		}
	});

	server.get("/api/v1/reddit-download", async (req, res) => {
		try {
			const { h } = require('./hashMe');
			if ('v' in req.query) {
				if ('h' in req.query) {
					let newh = h(req.query.v);
					if (req.query.h !== newh) {
						res.send("<h1>Forbidden.</h1>");
						return false;
					}
				} else {
					res.send("<h1>Forbidden.</h1>");
					return false;
				}
			} else {
				res.send("<h1>Forbidden.</h1>");
				return false;
			}
		
			const ffmpeg = require('fluent-ffmpeg');

			const title = req.query.t;
			const video = req.query.v;
			const audio = req.query.a;

			let timeout = null;

			if (video.indexOf("https://v.redd.it/") >= 0 && audio.indexOf("https://v.redd.it/") >= 0) {
				var regex = /redd.it\/(.*?)\//i;
				var match = regex.exec(video);
				var vid = "vid";
				if (match && match.length > 1) {
					vid = match[1];
				}
				res.contentType('video/mp4');
				res.attachment("DDLVID.COM - " + title + ".mp4");
				ffmpeg(video)
				.addInput(audio)
					.outputOptions('-c:v copy')
					.outputOptions('-c:a aac')
					.outputOptions('-b:a 160k')
					.outputOptions('-f mp4')
					.outputOptions('-preset fast')
					.outputOptions('-movflags frag_keyframe+empty_moov')
					.on('start', function () {
						timeout = setTimeout(() => {
							res.end();
							process.kill(process.pid, 'SIGHUP');
						}, 30 * 60 * 1000)
					})
					.on('end', function () {
						if (timeout) clearTimeout(timeout);
					})
					.on('error', function (err) {
						if (timeout) clearTimeout(timeout);
					})
					.pipe(res, { end: true }); 
			} else if (video.indexOf("https://v.redd.it/") >= 0) {
				res.contentType('video/mp4');
				var regex = /redd.it\/(.*?)\//i;
				var match = regex.exec(video);
				var vid = "vid";
				if (match && match.length > 1) {
					vid = match[1];
				}
				res.attachment("DDLVID.COM - " + vid + ".mp4");
				
				const resp = await axios({
					url: video,
					responseType: 'stream'
				});
				resp.data.pipe(res);

			} else {
				res.send({ success: false })
			}

		} catch(error) {
			res.send({ success: false })
		}
	});

	server.get([
		"/api/v1/pscp-download",
		"/api/v1/ythls-download"
	], async (req, res) => {
		try {
			const { h } = require('./hashMe');
			if ('u' in req.query) {
				if ('h' in req.query) {
					let newh = h(req.query.u);
					if (req.query.h !== newh) {
						res.send("<h1>Forbidden.</h1>");
						return false;
					}
				} else {
					res.send("<h1>Forbidden.</h1>");
					return false;
				}
			} else {
				res.send("<h1>Forbidden.</h1>");
				return false;
			}

			const ffmpeg = require('fluent-ffmpeg');
			const title = req.query.t;
			const video = req.query.u;
			let timeout = null;

			if (video !== "") {
				res.contentType('video/mp4');
				res.attachment("DDLVID.COM - " + title + ".mp4");
				ffmpeg()
					.addInput(video)
					.outputOptions('-c:v copy')
					.outputOptions('-c:a aac')
					.outputOptions('-b:a 160k')
					.outputOptions('-f mp4')
					.outputOptions('-preset fast')
					.outputOptions('-movflags frag_keyframe+empty_moov')
					.on('start', function () {
						timeout = setTimeout(() => {
							res.end();
							process.kill(process.pid, 'SIGHUP');
						}, 30 * 60 * 1000)
					})
					.on('end', function () {
						if (timeout) clearTimeout(timeout);
					})
					.on('error', function (err) {
						if (timeout) clearTimeout(timeout);
					})
					.pipe(res, { end: true }); 
			} else {
				res.send({ success: false })
			}
		} catch(error) {
			res.send({ success: false })
		}
	});

	server.get("/share", async (req, res) => {
		var url = "";
		var regex = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;

		if ("title" in req.query && req.query.title !== "") {
			var match = regex.exec(req.query.title);
			if (match && match.length > 1) {
				url = match[0];
			}
		}

		if ("text" in req.query && req.query.text !== "") {
			var match = regex.exec(req.query.text);
			if (match && match.length > 1) {
				url = match[0];
			}
		}

		if ("url" in req.query && req.query.url !== "") {
			url = req.query.url;
		}

		if (url !== "") {
			res.redirect(301, 'https://ddlvid.com/download?link=' + encodeURIComponent(url));
		} else {
			res.redirect(301, 'https://ddlvid.com/');
		}
	});

	server.get("/thumb", async (req, res) => {
		if ("url" in req.query && req.query.url !== "") {
			const { url } = req.query;

			try {
				const p = [
					axios({
						method: 'get',
						url,
						responseType: 'stream'
					}),
					axios({
						method: 'get',
						url,
						responseType: 'arraybuffer'
					})
				];
				const r = await Promise.all(p);
				var response = r[0].data;
				
				if ("content-type" in response.headers) {
					const contentType = response.headers["content-type"];
					if (contentType.indexOf("image") >= 0 || contentType.indexOf("video") >= 0) {
						return response.pipe(res)
					}
				} 
								
			} catch(error) {
				console.log(error)
			}

		}
		
		res.sendFile(path.join(__dirname, 'public/icon.png'));
	});

	// server.get("/api/v1/get_proxy", async (req, res) => {
	// 	var r = await axios.get("http://gimmeproxy.com/api/getProxy?anonymityLevel=1&supportsHttps=true&timeout=60&maxCheckPeriod=6000&protocol=http");
	// 	fs.writeFile('proxy.txt', r.data.curl, function (err) {
	// 		if (err) return console.log(err);
	// 		return res.send(r.data.curl);
	// 	});
	// });

	server.post("/api/v1/send_message", async (req, res) => {
		const contact = req.body;
		if ("name" in contact && "email" in contact && "subject" in contact && "message" in contact && "token" in contact) {
			const token = contact.token;
			const RECAPTCHA_SECRET = "6LfMW7sZAAAAAFzPl5kWDXrePq1jWJ90R6xvXwJA";
			var recaptcha_url = "https://www.google.com/recaptcha/api/siteverify?";
			recaptcha_url += "secret=" + RECAPTCHA_SECRET + "&";
			recaptcha_url += "response=" + token + "&";
			recaptcha_url += "remoteip=" + req.ip;
			const r = await axios.get(recaptcha_url);
			if (!r.data.success) {
				res.send(JSON.stringify({
					success: false,
					error: "Captcha validation failed"
				}));
				return false;
			}

			const message = {
				from: 'noreply@ddlvid.com',
				to: 'contact@aimadnet.com',
				subject: 'You have a new DDLVid Message',
				text: `
Name: ${contact.name}
Email: ${contact.email}
Subject: ${contact.subject}
Message: ${contact.message}
IP: ${req.ip}
				`,
			};
			transport.sendMail(message, function(error) {
				if (error) {
					res.send(JSON.stringify({success: false, error: "Can't send the message."}));
				} else {
					res.send(JSON.stringify({success: true}));
				}
			});
		} else {
			res.send(JSON.stringify({
				success: false,
				error: "All fields are required."
			}));
		}
	});

	server.get("/sw.js", (req, res) => {
		res.sendFile(path.join(__dirname, "public", 'sw.js'));
	});
	
	server.get("/ads.txt", (req, res) => {
		res.sendFile(path.join(__dirname, 'ads.txt'));
	});

	server.get("/robots.txt", (req, res) => {
		res.sendFile(path.join(__dirname, 'robots.txt'));
	});

	server.get("/sitemap.xml", (req, res) => {
		res.sendFile(path.join(__dirname, 'sitemap.xml'));
	});

	server.get("/config.json", (req, res) => {
		res.sendFile(path.join(__dirname, 'config.json'));
	});

	server.get("/s", (req, res) => {
		res.send("1");
	});

	server.get("/ping", (req, res) => {
		res.send("pong");
	});

	server.get("/download/:id", (req, res) => {
		var url = "https://twitter.com/i/status/" + req.params.id;
		res.redirect("/download?link=" + url);
	});

	server.get("/", (req, res) => {
		if ("id" in req.query) {
			var url = "https://twitter.com/i/status/" + req.query.id;
			res.redirect("/download?link=" + url);
		} else {
			return handle(req, res);
		}
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	if (!dev && cluster.isMaster) {
		for (var i = 0; i < numCPUs; i++) {
			cluster.fork();
		}
		cluster.on('online', function(worker) {
			console.log('Worker ' + worker.process.pid + ' is online');
		});
		cluster.on('exit', function(worker, code, signal) {
			console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
			console.log('Starting a new worker');
			cluster.fork();
		});

	} else {
		var pserver = server.listen(port);
		console.log(`> Ready on http://localhost:${port}`);
		console.log('Process ' + process.pid + ' is listening to all incoming requests');
		process.on('SIGINT', function() {
			pserver.close();
			// calling .shutdown allows your process to exit normally
			toobusy.shutdown();
			process.exit();
		});
	}

})()

