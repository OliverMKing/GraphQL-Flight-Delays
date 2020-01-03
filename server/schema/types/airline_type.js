const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const AirlineType = new GraphQLObjectType({
  name: "AirlineType",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString }
  }
});

module.exports = AirlineType;
