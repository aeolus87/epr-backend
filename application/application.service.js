const db = require("_helpers/db");
const Application = db.Application;

module.exports = {
  submitApplication,
  getApplicationData,
};

async function submitApplication(applicationData) {
  const application = new Application(applicationData);
  await application.save();
}

async function getApplicationData() {
  try {
    const data = await Application.find({}).lean();
    return data.length > 0 ? data : null;
  } catch (error) {
    throw error;
  }
}
