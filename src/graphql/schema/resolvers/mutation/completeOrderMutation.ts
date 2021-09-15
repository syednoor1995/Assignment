import { completeOrder } from "@src/data/orderService";
import { Order } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import {  GraphQLNonNull } from "graphql";
import GqlOrder from "../../typedefs/GqlOrder";
import CreateOrderInput from "../../typedefs/CreateOrderInput";



const createCartMutation = {
    type:GqlOrder,
    args:{
        input: {
            type: GraphQLNonNull(CreateOrderInput),
            description: "product input to be craeted"
        }
    },
    resolve : async(
        __source:unknown,
        {input:{totalPrice ,productId}}:any,
        __context: IApolloServerContext
    ): Promise<Order|null> => {
        return completeOrder(totalPrice  ,productId)
    }
}

export default createCartMutation