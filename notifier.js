"use strict";

const axios = require('axios');
const nodemailer = require('nodemailer');
const { h } = require('./hashMe');
const { exec } = require("child_process");
const transport = nodemailer.createTransport({
	host: 'localhost',
	port: 25,
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
axios.defaults.timeout = 10 * 1000;

const domain = "http://localhost:3001";

const urls = [
    "https://twitter.com/DONJAZZY/status/1280507784073707525?t=" + (new Date().getTime()),
    "https://www.facebook.com/watch/?v=259604532140718&t=" + (new Date().getTime()),
    "https://www.instagram.com/p/B4cM13Onk_6/?t=" + (new Date().getTime()),
    "https://www.youtube.com/watch?v=rAh7q6qGaL4&t=" + (new Date().getTime()),
    "https://www.tiktok.com/@fatijamaliofficiel/video/6811123699203329285?t=" + (new Date().getTime()),
    //"https://www.linkedin.com/posts/marida-sapichino-78b84719_anwarbenaissa-activity-6688789129712431104-56AH?t=" + (new Date().getTime()),
    "https://www.reddit.com/r/TikTokCringe/comments/hck824/im_hannah_montana/?t=" + (new Date().getTime())
];

const run = async () => {
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const res = await axios.get(domain + '/api/v1/download?url=' + encodeURIComponent(url) + "&h=" + encodeURIComponent(h(url)));
        var err = !res.data.success;
        if (!err && url.indexOf("reddit") > 0) {
            if (res.data.audio === null) {
                err = true;
            }
        }
console.log(url, err);

        if (err) {
            const message = {
                from: 'noreply@ddlvid.com',
                to: 'contact@aimadnet.com',
                subject: 'DDLVid - Technical Problem',
                text: `
    There is an issue on DDLVid.

    Link: ${url}
                `,
            };
            
            transport.sendMail(message, function(error) {
                if (error) {
                    console.log(error)
                } else {
                    console.log('email sent!');
                }
            });

            // restarting tor
            await new Promise(function(resolve) {
                exec("systemctl restart tor.service", () => {
                    resolve(true);
                });
            });
            break;
        }
    }
    return true;
}

run();
