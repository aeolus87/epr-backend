// homepage/homepage.controller.js
const express = require("express");
const router = express.Router();
const homepageService = require("./homepage.service");

router.get("/", getHomepageData);

module.exports = router;

function getHomepageData(req, res, next) {
  homepageService
    .getHomepageData()
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: "No homepage data found" });
      }
    })
    .catch((err) => next(err));
}
