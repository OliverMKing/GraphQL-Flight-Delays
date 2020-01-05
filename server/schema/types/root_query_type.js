const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

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
      resolve(parentValue, { name }, req) {
        return Airport.findOne({ name });
      }
    },
    airports: {
      type: new GraphQLList(AirportType),
      resolve() {
        return Airport.find();
      }
    },
    airline: {
      type: AirlineType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, { name }, req) {
        return Airline.findOne({ name });
      }
    },
    airlines: {
      type: new GraphQLList(AirlineType),
      resolve() {
        return Airline.find();
      }
    }
  }
});

module.exports = RootQueryType;
