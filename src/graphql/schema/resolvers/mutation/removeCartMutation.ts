import { removeFromCart } from "@src/data/cartService";
import { Cart } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import {  GraphQLNonNull } from "graphql";
import GqlCart from "../../typedefs/GqlCart";
import RemoveCartInput from "../../typedefs/RemoveCartInput";



const removeCartMutation = {
   type:GqlCart,
    args:{
        input: {
            type: GraphQLNonNull(RemoveCartInput),
            description: "product input to be craeted"
        }
    },
    resolve : async(
        __source:unknown,
        {input:{quantity ,productId,userId}}:any,
        __context: IApolloServerContext
    ): Promise<Cart|null> => {
        return removeFromCart(quantity ,productId,userId)
    }
}

export default removeCartMutation