const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const Flight = require("../../models/flight");

const AirlineType = new GraphQLObjectType({
  name: "AirlineType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    flights: {
      type: new GraphQLList(require("./flight_type")),
      resolve(parentValue) {
        return Flight.findFlights(parentValue.id);
      }
    }
  })
});

module.exports = AirlineType;
