const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// TODO: Replace with your mongo URL
const MONGO_URL = "mongodb://localhost:27017/test";

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);
mongoose.connection
  .once("open", () => console.log("Connected to Mongo instance."))
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
