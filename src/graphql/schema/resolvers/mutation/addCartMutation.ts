import { addToCart } from "@src/data/cartService";
import { Cart } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import {  GraphQLNonNull } from "graphql";
import GqlCart from "../../typedefs/GqlCart";
import CreateCartInput from "../../typedefs/CreateCartInput";



const createCartMutation = {
    type:GqlCart,
    args:{
        input: {
            type: GraphQLNonNull(CreateCartInput),
            description: "product input to be craeted"
        }
    },
    resolve : async(
        __source:unknown,
        {input:{quantity ,productId,userId}}:any,
        __context: IApolloServerContext
    ): Promise<Cart> => {
        return addToCart(quantity ,productId,userId)
    }
}

export default createCartMutation