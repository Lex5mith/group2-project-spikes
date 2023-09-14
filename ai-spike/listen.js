require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { fetchAnagrams, getRandomBookAndAnagram } = require("./aiController");

const port = 9090;

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("AI Anagram Server Ready");
});

app.get("/random-book-anagram", getRandomBookAndAnagram);

app.post("/ai", fetchAnagrams);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
