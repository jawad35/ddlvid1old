const shortid = require("shortid");
const URL = require("../models/urlshorten");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body?.link) return res.status(400).json({ error: "link is required" });
  const shortID = shortid();
  const short7characters = shortID.slice(0,7)

  await URL.create({
    shortId: short7characters,
    redirectURL: body?.link,
    visitHistory: [],
  });
  const url = `${process.env.BASE_URL}/l/${short7characters}`
  return res.json({ url });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.body.id;
  const result = await URL.findOne({ shortId });
  return res.json({
    redirectUrl: result?.redirectURL
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
