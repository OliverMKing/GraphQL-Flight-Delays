const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var airlines = require("airlines-iata-codes");

const AirlineSchema = new Schema({
  name: { type: String },
  code: { type: String }
});

AirlineSchema.statics.addAirline = function({ code }) {
  return this.find({ code }).then(airline => {
    if (airline.length > 0) return airline[0].save();

    const Airline = mongoose.model("airline", AirlineSchema);
    let name = airlines.getAirlineName(code);
    return new Airline({ name, code }).save();
  });
};

module.exports = mongoose.model("airline", AirlineSchema);
