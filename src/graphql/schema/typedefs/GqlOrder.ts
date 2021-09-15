import {  GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import GqlProduct from "./GqlProduct";

 const GqlOrder = new GraphQLObjectType({
     name : "Order",
     description: "Order history",
     fields: {
         id: {
             type:GraphQLNonNull(GraphQLID),
             description:"id of the category"
         },
         totalPrice: {
            type:GraphQLString,
            description:"name of the category"
        },
        productId: {
            type:GraphQLString,
            description:"name of the category"
        },
        Product:{
            type:GqlProduct,
            description:"id of the product added to cart"
        },
     }
 })

 export default GqlOrder