const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const AirportType = new GraphQLObjectType({
  name: "AirportType",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString }
  }
});

module.exports = AirportType;
