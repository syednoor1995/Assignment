import { getAllUser } from "@src/data/userService";
import { User } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { GraphQLList } from "graphql";
import GqlUser from "../../typedefs/GqlUser";




const getAllUserQuery = {
    type:GraphQLList(GqlUser),
    resolve : async(
        __source:unknown,
        __args:unknown,
        __context: IApolloServerContext,
        __info: unknown
    ): Promise<User[]> => {
        return getAllUser()
    }
}

export default getAllUserQuery