// Create web server
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// Parse JSON
app.use(bodyParser.json());
// Create comments
const comments = {};
// Create routes
app.get("/posts/:id/comments", (req, res) => {
  res.send(comments[req.params.id] || []);
});
app.post("/posts/:id/comments", (req, res) => {
  const id = require("crypto").randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = comments[req.params.id] || [];
  comments.push({ id, content });
  comments[req.params.id] = comments;
  res.status(201).send(comments);
});
// Listen port
app.listen(4001, () => {
  console.log("Listening on 4001");
});
