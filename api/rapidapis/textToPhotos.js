const { default: Axios } = require("axios");

async function TextToPhotosApi(req, res) {
  const body = req.body;
  if (!body?.text) return res.status(400).json({ error: "text is required" });
  const options = {
    method: 'POST',
    url: 'https://text-to-video.p.rapidapi.com/v3/process_text_and_search_media',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '07adaaa04emshebef44a15906b7cp11a4f2jsn8ecaa19035b4',
      'X-RapidAPI-Host': 'text-to-video.p.rapidapi.com'
    },
    data: {
      script:body?.text,
      dimension: '16:9'
    }
  };
  try {
    const response = await Axios.request(options);
    console.log(response, "Hey123")
    const jsonString = response?.data
    // Parse the JSON string into an object
    const jsonObject = JSON.parse(jsonString);
    // Access the URLs from the object
    const imageURLs = jsonObject.scenes[0].media.map(media => media.resource.url);
const partToRemove = 'https://lookaside'; // Replace with the specific part you want to remove
const filteredList = imageURLs.filter((item) => !item.includes(partToRemove));
    // const audioURL = jsonObject.audio.url;
    return res.json({
        success: true,
        data:response.data,
        photos: filteredList
      });
  } catch (error) {
    return res.json({
        success: false,
        data:[],
      });
  }

}

module.exports = {
  TextToPhotosApi,
};
