const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

const mongodbconn = mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("database connection established");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongodbconn;
