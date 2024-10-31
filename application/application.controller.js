const express = require("express");
const router = express.Router();
const applicationService = require("./application.service");

router.post("/", submitApplication); // POST route for submitting applications
router.get("/", getApplicationData); // GET route for fetching applications

module.exports = router;

async function submitApplication(req, res, next) {
  try {
    await applicationService.submitApplication(req.body);
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    next(err);
  }
}

function getApplicationData(req, res, next) {
  applicationService
    .getApplicationData()
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: "No application data found" });
      }
    })
    .catch((err) => next(err));
}
