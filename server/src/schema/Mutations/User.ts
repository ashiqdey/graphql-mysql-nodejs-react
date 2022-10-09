import { UserType, } from "../TypeDefs/User"
import { MessageType } from "../TypeDefs/Message";
import { GraphQLID, GraphQLString } from "graphql"
import { Users } from "../../Entities/Users"


export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, email, password } = args
    await Users.insert({ name, email, password })
    // await Users.insert(args)
    return args;
  }
}





interface IUpdatePayload {
  email: string,
  oldPassword: string,
  newPassword: string,
}

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    email: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: IUpdatePayload) {
    const { email, oldPassword, newPassword } = args

    const user = await Users.findOne({ where: { email } });
    if (!user) {
      throw new Error("Email is invalid");
    }
    if (user?.password !== oldPassword) {
      throw new Error("Password do not match");
    }

    await Users.update({ email }, { password: newPassword })

    return { status: 200, message: "Password updated" };
  }
}



export const DELETE_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { id } = args
    await Users.delete(id)
    // await Users.delete({id})
    return {id};
   
  }
}
