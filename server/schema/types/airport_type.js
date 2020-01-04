const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const FlightType = require("./flight_type");

const AirportType = new GraphQLObjectType({
  name: "AirportType",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString }

    /*
    outgoing_flights: {
      type: new GraphQLList(FlightType),
      resolve(parentValue) {
        return;
      }
    }*/
  }
});

module.exports = AirportType;
