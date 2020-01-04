const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var airports = require("airport-codes");

const AirportSchema = new Schema({
  name: { type: String },
  code: { type: String }
});

AirportSchema.statics.addAirport = function({ code }) {
  return this.find({ code }).then(airport => {
    if (airport.length > 0) return airport[0].save();

    const Airport = mongoose.model("airport", AirportSchema);

    const name = airports.findWhere({ iata: code }).get("name");
    return new Airport({ name, code }).save();
  });
};

module.exports = mongoose.model("airport", AirportSchema);
