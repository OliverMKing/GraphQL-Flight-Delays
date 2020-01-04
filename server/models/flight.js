const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  number: { type: String },
  airline: {
    type: Schema.Types.ObjectId,
    ref: "airline"
  },
  origin: {
    type: Schema.Types.ObjectId,
    ref: "airport"
  },
  destination: {
    type: Schema.Types.ObjectId,
    ref: "airport"
  },
  arrival_delay: { type: Number },
  destination_delay: { type: Number }
});

module.exports = mongoose.model("flight", FlightSchema);
