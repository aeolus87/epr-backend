//_helpers/db.js

const mongoose = require("mongoose");

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://aeodev:epr-clan522@epr.mzolr.mongodb.net/EPR";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

module.exports = {
  Homepage: require("../homepage/homepage.model"),
};
