const axios = require("axios");

const { api_url } = require('../server');
const { h } = require('../hashMe');

const get_tiktok = async (url) => {
    const options = {
        method: 'GET',
        url: 'https://scraptik.p.rapidapi.com/video-without-watermark',
        params: {url},
        headers: {
          'X-RapidAPI-Key': 'b8f02ce690msh55da9885cec9172p18b781jsn504c61d99ca2',
          'X-RapidAPI-Host': 'scraptik.p.rapidapi.com'
        }
    };
      
    let r = await axios.request(options);
    const video = r.data;
    if (video) {
        if (video !== "" && "no_watermark_link" in video) {
            return {
                success: true,
                result: {
                    title: video.text,
                    video: video.watermark_link,
                    original_video: video.no_watermark_link,
                    download_video: api_url + "/api/v1/download-tiktok?u=" + encodeURIComponent(video.no_watermark_link) + "&h=" + encodeURIComponent(h(video.no_watermark_link)) + "&t=" + encodeURIComponent(video.text),
                    download_original_video: api_url + "/api/v1/download-tiktok?u=" + encodeURIComponent(video.no_watermark_link) + "&h=" + encodeURIComponent(h(video.no_watermark_link)) + "&t=" + encodeURIComponent(video.text),
                    thumb: video.cover_link
                }
            }
        }
    }

    return {
        success: false,
        result: null
    }
}

module.exports = {
    get_tiktok
};