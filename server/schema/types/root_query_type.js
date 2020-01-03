const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;
const AirportType = require("./airport_type");

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
