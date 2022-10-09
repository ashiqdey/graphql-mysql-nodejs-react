import { gql } from "@apollo/client"

export const CREATE_USER = gql`
  mutation createUser(
    $name :String!
    $email :String!
    $password :String!
  ){
    createUser(
      name:$name
      email:$email
      password:$password
    ){
      id,name,email,password
    }
  }
`

export const UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $email: String!
    $oldPassword: String!
    $newPassword: String!
  ) {
    updatePassword(
      email: $email
      oldPassword: $oldPassword
      newPassword: $newPassword
    ) {
      message
    }
  }
`;


export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`
