const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Test data");
});
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log("Listening at 8000");
});
