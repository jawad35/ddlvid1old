const { default: Axios } = require("axios");

async function textToSuggestions(req, res) {
  const body = req.body;
  if (!body?.text) return res.status(400).json({ error: "text is required" });
  const encodedParams = new URLSearchParams();
  encodedParams.set('term', body?.text);
  
  const options = {
    method: 'POST',
    url: 'https://stock-photos-and-videos.p.rapidapi.com/api/suggestions',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '07adaaa04emshebef44a15906b7cp11a4f2jsn8ecaa19035b4',
      'X-RapidAPI-Host': 'stock-photos-and-videos.p.rapidapi.com'
    },
    data: encodedParams,
  };
  try {
    const response = await Axios.request(options);
    return res.json({
        success: true,
        suggestionsArray:response?.data?.results?.data?.attributes?.suggestions
      });
  } catch (error) {
    return res.json({
        success: false,
        data:[],
      });
  }

}

module.exports = {
  textToSuggestions,
};
