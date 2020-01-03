const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat } = graphql;
const AirlineType = require("./airline_type");
const AirportType = require("./airport_type");

const FlightType = new GraphQLObjectType({
  name: "FlightType",
  fields: {
    id: { type: GraphQLID },
    number: { type: GraphQLString },
    airline: { type: AirlineType },
    origin: { type: AirportType },
    destination: { type: AirportType },
    arrival_delay: { type: GraphQLFloat },
    destination_delay: { type: GraphQLFloat }
  }
});

module.exports = FlightType;
