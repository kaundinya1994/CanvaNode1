const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Test data");
});
app.listen("8000", () => {
  console.log("Listening at 8000");
});
