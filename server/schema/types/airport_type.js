const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const Flight = require("../../models/flight");

const AirportType = new GraphQLObjectType({
  name: "AirportType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    outgoing_flights: {
      type: new GraphQLList(require("./flight_type")),
      resolve(parentValue) {
        return Flight.findOutgoing(parentValue.id);
      }
    },
    incoming_flights: {
      type: new GraphQLList(require("./flight_type")),
      resolve(parentValue) {
        return Flight.findIncoming(parentValue.id);
      }
    }
  })
});

module.exports = AirportType;
