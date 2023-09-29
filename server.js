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
const mongoose =require("mongoose");
require('dotenv').config();
const cors = require("cors");
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const Stripe = require("stripe");

client.setConfig({
    apiKey: '5c4289c352a01ce9b43581950532efb3-us21',
    server: 'us21',
});

// MiddleWare

const checkAuth = async (
	req,
	res,
	next
  ) => {
	let token = req.header("authorization");

	if (!token) {
	  return res.status(403).json({
		errors: [
		  {
			msg: "unauthorized",
		  },
		],
	  });
	}

	token = token.split(" ")[1];

	try {
	  const user = (await JWT.verify(
		token,
		process.env.JWT_SECRET
	  ));

	  req.user = user.email;
	  next();
	} catch (error) {
	  return res.status(403).json({
		errors: [
		  {
			msg: "unauthorized",
		  },
		],
	  });
	}
  };

  //MiddleWare

// Stripe setup start
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: "2020-08-27",
  })
// Stripe setup end

// MongoDB Connection Opened

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongodb");
    const app = express();
    app.use(express.json());
    app.use(cors());
    // app.use("/articles", articlesRoutes);

    // app.listen(8080, () => {
    //   console.log(`Now listening to port 8080`);
    // });
  })
  .catch((error) => {
    console.log({ error });
    throw new Error(error);
  });


// MongoDB Connection Closed

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
	module.exports.api_url = "http://localhost:3001";
} else {
	module.exports.api_url = "https://d.ddlvid.com";
}

const { downloader } = require("./api/downloader");
const Subscription = require("./models/subscription");
const { handleGenerateNewShortURL, handleGetAnalytics } = require("./controllers/urlshortenerController");
const URLShorten = require("./models/urlshorten");
const { AllMediaDownloader } = require("./api/allmediadownloader");
const EmailSender = require("./controllers/mailController");
const { MailChimpApi } = require("./api/mailchimp");

const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
	auth: {
        user: 'isom14@ethereal.email',
        pass: 'bczEqbhE2jWQShcSd1'
    }
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
	// Login Api start
	server.post("/login", async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
		  return res.json({
			errors: [
			  {
				msg: "Invalids credentials",
			  },
			],
			data: null,
			success:false
		  });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
		  return res.json({
			errors: [
			  {
				msg: "Invalids credentials",
			  },
			],
			data: null,
			success:false
		  });
		}

		const token = await JWT.sign(
		  { email: user.email },
		  process.env.JWT_SECRET,
		  {
			expiresIn: 360000,
		  }
		);

		return res.json({
		  errors: [],
		  success:true,
		  data: {
			token,
			user: {
			  id: user._id,
			  email: user.email,
			},
		  },
		});
	  });
	// Login Api send


	//Sign up Api Start
	server.post(
		"/signup",
		// body("email").isEmail().withMessage("The email is invalid"),
		// body("password").isLength({ min: 5 }).withMessage("The password is invalid"),
		async (req, res) => {
		  const validationErrors = validationResult(req);

		  if (!validationErrors.isEmpty()) {
			const errors = validationErrors.array().map((error) => {
			  return {
				msg: error.msg,
			  };
			});

			return res.json({ errors, data: null, success:false });
		  }

		  const { email, password, name } = req.body;

		  const user = await User.findOne({ email });

		  if (user) {
			return res.json({
			  errors: [
				{
				  msg: "Email already in use",
				},
			  ],
			  data: null,
			});
		  }

		  const hashedPassword = await bcrypt.hash(password, 10);

		  const customer = await stripe.customers.create(
			{
			  email,
			},
			{
			  apiKey: process.env.STRIPE_SECRET_KEY,
			}
		  );

		  const newUser = await User.create({
			email,
			password: hashedPassword,
			stripeCustomerId: customer.id,
			name
		  });

		  const token = await JWT.sign(
			{ email: newUser.email },
			process.env.JWT_SECRET,
			{
			  expiresIn: 360000,
			}
		  );

		  res.json({
			errors: [],
			success:true,
			data: {
			  token,
			  user: {
				id: newUser._id,
				email: newUser.email,
				stripeCustomerId: customer.id,
				name:newUser.name
			  },
			},
		  });
		}
	  );

	// Sign Up Api end

	// me
	server.get("/me", checkAuth, async (req, res) => {
		const user = await User.findOne({ email: req.user });
		return res.json({
		  errors: [],
		  success:true,
		  data: {
			user: {
			  id: user._id,
			  email: user.email,
			  stripeCustomerId: user.stripeCustomerId,
			  name:user.name
			},
		  },
		});
	  });

	// me

	// Stripe Apis start

	server.get("/prices", checkAuth, async (req, res) => {
		const prices = await stripe.prices.list({
		  apiKey: process.env.STRIPE_SECRET_KEY,
		});

		return res.json(prices);
	  });



	  server.post("/session", checkAuth, async (req, res) => {
		// just for creating subscription data it is compulsory to create one item in database
		// Subscription.create({
		//   access:"Basic"
		// })
		const user = await User.findOne({ email: req.user });

		const session = await stripe.checkout.sessions.create(
		  {
			mode: "subscription",
			payment_method_types: ["card"],
			line_items: [
			  {
				price: req.body.priceId,
				quantity: 1,
			  },
			],
			success_url: `${process.env.BASE_URL}/success`,
			cancel_url: `${process.env.BASE_URL}/cancel`,
			customer: user.stripeCustomerId,
		  },
		  {
			apiKey: process.env.STRIPE_SECRET_KEY,
		  }
		);

		return res.json(session);
	  });
	  // Stripe APis end

	  //Subscription data Api start
	  server.get("/subscription", checkAuth, async (req, res) => {
		const user = await User.findOne({ email: req.user });
		const subscriptions = await stripe.subscriptions.list(
		  {
			customer: user.stripeCustomerId,
			status: "all",
			expand: ["data.default_payment_method"],
		  },
		  {
			apiKey: process.env.STRIPE_SECRET_KEY,
		  }
		);

		if (!subscriptions.data.length) return res.json([]);

		//@ts-ignore
		const plan = subscriptions.data[0].plan.nickname;

		if (plan === "Basic") {
		  const subscriptiondata = await Subscription.find({ access: "Basic" });
		  return res.json(subscriptiondata);
		} else if (plan === "Standard") {
		  const subscriptiondata = await Subscription.find({
			access: { $in: ["Basic", "Standard"] },
		  });
		  return res.json(subscriptiondata);
		} else {
		  const subscriptiondata = await Subscription.find({});
		  return res.json(subscriptiondata);
		}

		res.json(plan);
	  });
	  //Subscription data Api end

	  //Shorten url api
	  server.post("/shorturl", handleGenerateNewShortURL);
      server.post("/getlink", handleGetAnalytics);
	  

	  // Video Downloader using RapidApi start
	  
	  server.post("/videodownload", async (req, res) => {
		console.log(req.body)
		const {link, socialName} = req?.body
		const ApiResponse = await AllMediaDownloader(link, socialName)
		console.log(ApiResponse, "res")
		// if (ApiResponse?.data?.result?.url){

		// }
		// const shorturl = await axios(`https://api.shrtco.de/v2/shorten?url=${link}`);
		if (ApiResponse) {
			res.json({
				success: true,
				data: ApiResponse,
				url:ApiResponse?.result?.url
			});
		} else {
			res.json({
				success: false,
				error: "Something went wrong"
			});
		}

		// return res.json(prices);
	  });
	  // Video Downloader using RapidApi end
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

// send contact email api
	server.post("/api/v1/send_message", async (req, res) => {
		const contact = req.body;
		if ("name" in contact && "email" in contact && "subject" in contact && "message" in contact) {
			EmailSender(req?.body, res)
			MailChimpApi(req?.body)
		} else {
			res.send(JSON.stringify({
				success: false,
				error: "All fields are required."
			}));
		}
	});
// send contact email api end

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
			// console.log('Worker ' + worker.process.pid + ' is online');
		});
		cluster.on('exit', function(worker, code, signal) {
			// console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
			// console.log('Starting a new worker');
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

