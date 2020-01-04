const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const AirlineType = require("./types/airline_type");
const AirportType = require("./types/airport_type");
const FlightType = require("./types/flight_type");
const Airline = require("../models/airline");
const Airport = require("../models/airport");
const Flight = require("../models/flight");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAirline: {
      type: AirlineType,
      args: {
        name: { type: GraphQLString },
        code: { type: GraphQLString }
      },
      resolve(parentValue, { name, code }) {
        return new Airline({ name, code }).save();
      }
    },

    addAirport: {
      type: AirportType,
      args: {
        name: { type: GraphQLString },
        code: { type: GraphQLString }
      },
      resolve(parentValue, { name, code }) {
        return new Airport({ name, code }).save();
      }
    }
  }
});

module.exports = mutation;
