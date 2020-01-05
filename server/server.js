const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const csv = require("csv-parser");
const fs = require("fs");
const Flight = require("./models/flight");

const app = express();

// TODO: Replace with your mongo URL
const MONGO_URL = "mongodb://localhost:27017/test";

// TODO: Set whether you want to load data or not
const LOAD_DATA = true;

// TODO: Set to the location of your load file (https://www.kaggle.com/giovamata/airlinedelaycauses#DelayedFlights.csv)
const LOAD_FILE = "./DelayedFlights.csv";

// Loads data if LOAD_DATA is true
// Called after database is connected
const loadData = function() {
  console.log("Connected to Mongo instance.");
  if (LOAD_DATA) {
    console.log("Loading data...");
    fs.createReadStream(LOAD_FILE)
      .pipe(csv())
      .on("data", data => {
        // Limits the amount of information added to database since this is just a proof of concept
        if (Math.floor(Math.random() * 10000) == 1) {
          Flight.addFlight({
            number: data.FlightNum,
            airline_code: data.UniqueCarrier,
            origin_code: data.Origin,
            dest_code: data.Dest,
            arrival_delay: data.DepDelay,
            destination_delay: data.ArrDelay
          });
        }
      })
      .on("end", () => {
        console.log("Done loading data.");
      });
  }
};

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);
mongoose.connection
  .once("open", () => loadData())
  .on("error", error => console.log("Error connecting to Mongo:", error));
const db = mongoose.connection;

// Set up graphql server
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.use(bodyParser.json());

module.exports = app;
