//server.js
require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./_helpers/error-handler.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// API routes
app.use("/api/homepage", require("./homepage/homepage.controller"));

// Global error handler
app.use(errorHandler);

// Start server
const port = process.env.PORT || 3002;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
