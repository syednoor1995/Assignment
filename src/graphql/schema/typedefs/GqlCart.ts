import {  GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType,  GraphQLString } from "graphql";
import GqlProduct from "./GqlProduct";
import GqlUser from "./GqlUser";



 const GqlCart = new GraphQLObjectType({
     name : "cart",
     description: "A cart",
     fields: {
         id: {
             type:GraphQLNonNull(GraphQLID),
             description:"id of the cart"
         },
         quantity: {
            type:GraphQLString,
            description:"quantity of the product added to cart"
        },
        productId:{
            type:GraphQLString,
            description:"id of the product added to cart"
        },
        userId:{
            type:GraphQLString,
            description:"id of the user added to cart"
        },
        Product:{
            type:GqlProduct,
            description:"product details"
        },
        User:{
            type:GqlUser,
            description:"user details"
        },

     }
 })

 export default GqlCart