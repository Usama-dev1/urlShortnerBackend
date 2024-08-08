const express = require("express");
const { shortenController } = require("../controllers/urlController");
const urlRouter = express.Router();

urlRouter.post("/shorten", shortenController);

urlRouter.delete("/delete/:shortId", (req, res) => {
  res.json({ message: "delete route working" });
});

urlRouter.get("/test", (req, res) => {
  res.send("Test route is working!");
});
urlRouter.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Define other API routes here

// 404 Handler

module.exports = urlRouter;
