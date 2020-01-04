const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const AirlineType = require("./airline_type");
const AirportType = require("./airport_type");
const FlightType = require("./flight_type");
const Airline = require("../../models/airline");
const Airport = require("../../models/airport");
const Flight = require("../../models/flight");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    airport: {
      type: AirportType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        return args.name;
      }
    }
  }
});

module.exports = RootQueryType;
