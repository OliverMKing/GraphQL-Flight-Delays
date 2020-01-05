const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Airline = require("./airline");
const Airport = require("./airport");

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

// Adds flight to mongo and creates corresponding airlines and airports if necessary
FlightSchema.statics.addFlight = function({
  number,
  airline_code,
  origin_code,
  dest_code,
  arrival_delay,
  destination_delay
}) {
  const Flight = mongoose.model("flight", FlightSchema);

  const airline = Airline.addAirline({ code: airline_code });
  const origin = Airport.addAirport({ code: origin_code });
  const destination = Airport.addAirport({ code: dest_code });

  return Promise.all([airline, origin, destination]).then(
    ([airline, origin, destination]) =>
      new Flight({
        number,
        airline,
        origin,
        destination,
        arrival_delay,
        destination_delay
      }).save()
  );
};

// Finds outgoing_flights by Airport id
FlightSchema.statics.findOutgoing = function(id) {
  const airport = Airport.findById(id);
  return this.find({ origin: airport })
    .populate("outgoing_flights")
    .then(flight => flight.outgoing_flights);
};

module.exports = mongoose.model("flight", FlightSchema);
