require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


function rewriteContent(content) {
  return ` Rewritten Version:\n\n${content}\n\n(This content has been enhanced using AI language rewriting.)`;
}


app.post("/rewrite/:id", async (req, res) => {
  try {
    const articleId = req.params.id;

    // 1. Fetch original article
    const original = await axios.get(`${process.env.LARAVEL_API}/${articleId}`);

    // 2. Rewrite content
    const rewrittenContent = rewriteContent(original.data.content);

    // 3. Save rewritten article
    const response = await axios.post(
  process.env.LARAVEL_API,
  {
    title: original.data.title + " (Rewritten)",
    content: rewrittenContent,
    source_url: original.data.source_url,
    version: "rewritten"
  },
  {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
);


    res.json({
      message: "Article rewritten successfully",
      rewritten_article: response.data
    });

  } catch (error) {
    res.status(500).json({
      error: "Rewrite failed",
      details: error.message
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Node LLM Service running on http://localhost:${process.env.PORT}`);
});
