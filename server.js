// server.js
require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./_helpers/error-handler.js");

const allowedOrigins = ["https://epr-chi.vercel.app", "http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// API routes
app.use("/api/homepage", require("./homepage/homepage.controller"));
app.use("/api/application", require("./application/application.controller"));

// Global error handler
app.use(errorHandler);

// Start server
const port = process.env.PORT || 3002;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
