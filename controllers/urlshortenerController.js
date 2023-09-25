const shortid = require("shortid");
const URL = require("../models/urlshorten");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body?.link) return res.status(400).json({ error: "link is required" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body?.link,
    visitHistory: [],
  });
  const url = `${process.env.BASE_URL}/link/${shortID}`
  return res.json({ url });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
