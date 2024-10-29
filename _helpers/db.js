// _helpers/db.js

const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error(
    "MongoDB connection URI is not defined. Please set MONGODB_URI in your environment variables."
  );
  process.exit(1);
}

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Export your models
module.exports = {
  Homepage: require("../homepage/homepage.model"),
};
