const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require("./routes/api");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/public", express.static("public"));
app.use(express.static(path.resolve(__dirname, "../")));

app.get("/", (req, res) => {
  return res.status(200).json("");
});
app.use("/api", apiRouter);

app.listen(3000);
