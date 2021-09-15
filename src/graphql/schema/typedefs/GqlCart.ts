import {  GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType,  GraphQLString } from "graphql";
import GqlProduct from "./GqlProduct";



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
        Product:{
            type:GqlProduct,
            description:"id of the product added to cart"
        },
     }
 })

 export default GqlCart