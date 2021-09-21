import { getOrderHistory } from "@src/data/orderService";
import { Order } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import GqlOrder from "../../typedefs/GqlOrder";




const getAllOrder =  {
    type:GraphQLList(GqlOrder),
    args: {
        userId: {
          type: GraphQLString
        }
      },
    resolve : async(
        __source:unknown,
        __args,
        __context: IApolloServerContext,
        __info: unknown
    ): Promise<Order[]> => {
        
        return getOrderHistory(__args.userId)
    }
}

export default getAllOrder