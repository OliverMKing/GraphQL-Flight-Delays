const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AirlineSchema = new Schema({
  name: { type: String },
  code: { type: String }
});

AirlineSchema.statics.addAirline = function(code) {
  return this.find({ code }).then(airline => {
    if (airline.length > 0) return airline[0].save();

    const Airline = mongoose.model("airline", AirlineSchema);
    const name = "Placeholder";
    return new Airline({ name, code }).save();
  });
};

module.exports = mongoose.model("airline", AirlineSchema);
