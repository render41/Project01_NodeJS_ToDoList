const express = require("express");

const app = express();

// Route Test
app.get("/", (req, res) => {
  res.send("<h1>My List Works</h1>");
  console.log(res.statusCode);
});

// Route JSON
app.get("/json", (req, res) => {
  res.json({ title: "Tarefa X", done: true });
});

app.listen(3000, () => {
  console.log("Server Start");
});
