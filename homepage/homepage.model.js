const mongoose = require("mongoose");

const mapSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the map
  image: { type: String, required: true },
  modes: { type: [String], required: true }, // Array of game modes (e.g., 'snd', 'domination')
});

const homepageSchema = new mongoose.Schema(
  {
    scrimEvents: [
      {
        team1: { type: String, required: true },
        team2: { type: String, required: true },
        rule: { type: String, required: true },
        time: { type: String, required: true },
      },
    ],
    clanManagers: [
      {
        name: { type: String, required: true },
        role: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    maps: [mapSchema], // Add maps array with the defined map schema
  },
  { collection: "homepage" }
);

module.exports = mongoose.model("Homepage", homepageSchema, "homepage");
