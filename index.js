const express = require("express");

const app = express();

const randN = Math.random();

app.get("/", (req, res) => {
  res.json({ ok: true, number: randN });
});

app.listen(5000, () => {
  console.log("server online");
});
