const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fm = require("flight-manager");

const AirportSchema = new Schema({
  name: { type: String },
  code: { type: String }
});

AirportSchema.statics.addAirport = function({ code }) {
  return this.find({ code }).then(airport => {
    if (airport.length > 0) return airport[0].save();

    const Airport = mongoose.model("airport", AirportSchema);

    // TODO: This does not immediately set name so if the mutation
    //       is called, null will initially be displayed for name
    return fm.getAirlineByIata(code, function(res) {
      const name = res.name;
      return new Airport({ name, code }).save();
    });
  });
};

module.exports = mongoose.model("airport", AirportSchema);
