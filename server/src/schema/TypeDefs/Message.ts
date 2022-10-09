import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt } from "graphql";

export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    status: { type: GraphQLInt },
    message: { type: GraphQLString },
  }),
});