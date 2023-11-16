const axios = require("axios");

const AllMediaDownloader = async (url, socialName) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('url', url);
    const options = {
        method: 'POST',
        url: 'https://all-media-downloader.p.rapidapi.com/download',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '07adaaa04emshebef44a15906b7cp11a4f2jsn8ecaa19035b4',
          'X-RapidAPI-Host': 'all-media-downloader.p.rapidapi.com'
        },
        data: encodedParams,
      };
      
      try {
          const response = await axios.request(options);
          if (socialName === "instagram.com") {
            return {
                success: true,
                video_url: response?.data?.data?.shortcode_media?.video_url,
                description: response?.data?.data?.shortcode_media?.edge_media_to_caption?.edges[0]?.node?.text,
                data:response.data
            }
          }
          if (socialName === "pinterest.com" || socialName === "pin.it") {
            return {
                success: true,
                video_url: response?.data?.videos?.video_list?.V_720P?.url,
                description:response?.data?.description,
                data:response.data
            }
          }
          if (socialName === "reddit.com") {
            return {
                success: true,
                video_url: response?.data?.url,
                description:response?.data?.fulltitle,
                data:response.data
            }
          }
          if (socialName === "vimeo.com") {
            return {
                success: true,
                video_url: response?.data?.downloadable_formats[0].url,
                description:response?.data?.description,
                data:response.data
            }
          }

          if (socialName === "tiktok.com") {
            return {
                success: true,
                video_url: response?.data?.url,
                description:response?.data?.description,
                data:response.data
            }
          }
          if (socialName === "youtube.com" || socialName === "youtu.be") {
            const FilteredItems  = []
            const audioData = response?.data?.formats?.filter(obj => obj.resolution === "audio only" && obj.ext === "m4a");
            const objectWithProperty = response?.data?.formats?.filter(obj => obj.hasOwnProperty("audio_channels"));
            objectWithProperty?.map(item => {
                if (item?.ext === "mp4" && item?.audio_channels !== null) {
                    FilteredItems.push(item)
                } 
            })
            const maxObject = FilteredItems.reduce((max, obj) => {
                return obj.height > max.height ? obj : max;
              }, FilteredItems[0]); // Initialize 'max' with the first object in the array
              
            return {
                success: true,
                video_url: maxObject?.url,
                description:response?.data?.fulltitle,
                data:response.data,
                audio: audioData[0]?.url
            }
          }
          if (socialName === "fb.watch" || socialName === "facebook.com" || socialName === "fb.com") {
            return {
                success: true,
                video_url: response?.data?.playable_url_quality_hd,
                data:response.data
            }
          }
          if (socialName === "twitter.com" || socialName === "x.com") {
            // console.log(response?.data?.[0], 'res45')
            let keysArray = Object.keys(response?.data);

// Get the last key
let lastKey = keysArray[keysArray.length - 1];

// Get the last object using the last key
let lastObjectUrl = response?.data[lastKey]?.url;

          //     const FilteredItems  = []
          //     response?.data?.data?.tweetResult?.result?.legacy?.extended_entities?.media[0]?.video_info?.variants?.map(item => {
          //     if (item?.content_type === "video/mp4") {
          //         FilteredItems.push(item)
          //     } 
          // })
          // const maxObject = FilteredItems.reduce((max, obj) => {
          //   return obj.bitrate > max.bitrate ? obj : max;
          // }, FilteredItems[0]); // Initialize 'max' with the first object in the array
          // sessionStorage.setItem('videos_info', response.data)
            return {
                success: true,
                video_url: lastObjectUrl,
                // description:response?.data?.data?.tweetResult?.result?.legacy?.full_text,
                data:response.data
            }
          }
          if (socialName === "linkedin.com") {
            return {
                success: true,
                video_url: response?.data?.video?.contentUrl,
                description:response?.data?.video?.description,
                data:response.data
            }
          }
        //   return {
        //     success: false,
        //     result: response?.data
        // }
      } catch (error) {
        console.error(error);
        return {
          success: false,
          result: null
      }
      }

    return {
        success: false,
        result: null
    }
}

module.exports = {
    AllMediaDownloader
};