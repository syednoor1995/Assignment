import { User } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import {  GraphQLNonNull } from "graphql";
import CreateUserInput from "../../typedefs/CreateUserInput";
import GqlUser from "../../typedefs/GqlUser";
import { createUser } from "@src/data/userService";



const createUserMutation = {
    type:GqlUser,
    args:{
        input: {
            type: GraphQLNonNull(CreateUserInput),
            description: "user input to be craeted"
        }
    },
    resolve : async(
        __source:unknown,
        {input:{name,email}}:any,
        __context: IApolloServerContext
    ): Promise<User> => {
        return createUser(name,email)
    }
}

export default createUserMutation