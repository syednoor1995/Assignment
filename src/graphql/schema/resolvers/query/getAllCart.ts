import { getAllCart } from "@src/data/cartService";
import { Cart } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { GraphQLList } from "graphql";
import GqlCart from "../../typedefs/GqlCart";




const getAllCartQuery = {
    type:GraphQLList(GqlCart),
    resolve : async(
        __source:unknown,
        __args:unknown,
        __context: IApolloServerContext,
        __info: unknown
    ): Promise<Cart[]> => {
        return getAllCart()
    }
}

export default getAllCartQuery