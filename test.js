"use strict";

const assert = require('assert');
const axios = require('axios');
const { h } = require('./hashMe');

const domain = "http://localhost:4004";

describe('Twitter Test', async () => {
    it('success should return true', async () => {
        const url = "https://twitter.com/DONJAZZY/status/1280507784073707525?t=" + (new Date().getTime());
        const res = await axios.get(domain + '/api/v1/download?url=' + encodeURIComponent(url) + "&h=" + encodeURIComponent(h(url)));
        assert.equal(res.data.success, true);
    });
});

describe('Facebook Test', async () => {
    it('success should return true', async () => {
        const url = "https://www.facebook.com/watch/?v=259604532140718&t=" + (new Date().getTime());
        const res = await axios.get(domain + '/api/v1/download?url=' + encodeURIComponent(url) + "&h=" + encodeURIComponent(h(url)));
        assert.equal(res.data.success, true);
    });
});

describe('Instagram Test', async () => {
    it('success should return true', async () => {
        const url = "https://www.instagram.com/p/B4cM13Onk_6/?t=" + (new Date().getTime());
        const res = await axios.get(domain + '/api/v1/download?url=' + encodeURIComponent(url) + "&h=" + encodeURIComponent(h(url)));
        assert.equal(res.data.success, true);
    });
});

describe('Youtube Test', async () => {
    it('success should return true', async () => {
        const url = "https://www.youtube.com/watch?v=rAh7q6qGaL4&t=" + (new Date().getTime());
        const res = await axios.get(domain + '/api/v1/download?url=' + encodeURIComponent(url) + "&h=" + encodeURIComponent(h(url)));
        assert.equal(res.data.success, true);
    });
});

describe('TikTok Test', async () => {
    it('success should return true', async () => {
        const url = "https://www.tiktok.com/@fatijamaliofficiel/video/6811123699203329285?t=" + (new Date().getTime());
        const res = await axios.get(domain + '/api/v1/download?url=' + encodeURIComponent(url) + "&h=" + encodeURIComponent(h(url)));
        assert.equal(res.data.success && res.data.original_video !== null, true);
    });
});

// describe('LinkedIn Test', async () => {
//     it('success should return true', async () => {
//         const url = "https://www.linkedin.com/posts/marida-sapichino-78b84719_anwarbenaissa-activity-6688789129712431104-56AH?t=" + (new Date().getTime());
//         const res = await axios.get(domain + '/api/v1/download?url=' + encodeURIComponent(url) + "&h=" + encodeURIComponent(h(url)));
//         assert.equal(res.data.success, true);
//     });
// });

describe('Reddit Test', async () => {
    it('success should return true', async () => {
        const url = "https://www.reddit.com/r/TikTokCringe/comments/hck824/im_hannah_montana/?t=" + (new Date().getTime());
        const res = await axios.get(domain + '/api/v1/download?url=' + encodeURIComponent(url) + "&h=" + encodeURIComponent(h(url)));
        assert.equal(res.data.success && res.data.audio !== null, true);
    });
});