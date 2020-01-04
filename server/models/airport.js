const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AirportSchema = new Schema({
  name: { type: String },
  code: { type: String }
});

module.exports = mongoose.model("airport", AirportSchema);
