import { GraphQLObjectType, GraphQLSchema } from "graphql"
import { GET_ALL_USERS } from "./Queries/User"
import { CREATE_USER, UPDATE_PASSWORD, DELETE_USER } from "./Mutations/User"

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
  }
})

const Mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    updatePassword: UPDATE_PASSWORD,
    deleteUser: DELETE_USER,
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
})

