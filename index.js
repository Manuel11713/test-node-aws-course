const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ ok: true, message: "server" });
});

app.listen(5000, () => {
  console.log("server online");
});
