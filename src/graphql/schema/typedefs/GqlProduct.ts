import {  GraphQLFloat, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType,  GraphQLString } from "graphql";
import GqlCategory from "./GqlCategory";


 const GqlProduct = new GraphQLObjectType({
     name : "product",
     description: "A product",
     fields: {
         id: {
             type:GraphQLNonNull(GraphQLID),
             description:"id of the product"
         },
         name: {
            type:GraphQLString,
            description:"name of the product"
        },
        description:{
            type:GraphQLString,
            description:"description of the product"
        },
        price:{
            type:GraphQLFloat,
            description:"description of the product"
        },
        Category:{
            type:GraphQLList(GqlCategory),
            description:"category of the product"
        }
     }
 })

 export default GqlProduct