import { getOrderHistory } from "@src/data/orderService";
import { Order } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { GraphQLList } from "graphql";
import GqlOrder from "../../typedefs/GqlOrder";




const getAllOrderQuery = {
    type:GraphQLList(GqlOrder),
    resolve : async(
        __source:unknown,
        __args:unknown,
        __context: IApolloServerContext,
        __info: unknown
    ): Promise<Order[]> => {
        return getOrderHistory()
    }
}

export default getAllOrderQuery