const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    facebookLink: { type: String, required: true },
    gender: { type: String, required: true },
    uid: { type: String, required: true },
    ign: { type: String, required: true },
    streamerMode: { type: String },
    gameMode: { type: String },
    gamePreference: { type: String },
    birthday: { type: String },
    profile: { type: String },
    stats: { type: String },
    selfie: { type: String }, // Store path to the uploaded file
  },
  { collection: "applications" }
);

module.exports = mongoose.model("Application", applicationSchema);
