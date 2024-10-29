//homepage/homepage.service.js
const db = require("_helpers/db");
const Homepage = db.Homepage;

module.exports = {
  getHomepageData,
};

async function getHomepageData() {
  try {
    const data = await Homepage.find({}).lean();
    return data.length > 0 ? data : null;
  } catch (error) {
    throw error;
  }
}
