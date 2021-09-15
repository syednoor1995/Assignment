import {  GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

 const GqlCategory = new GraphQLObjectType({
     name : "Category",
     description: "A category",
     fields: {
         id: {
             type:GraphQLNonNull(GraphQLID),
             description:"id of the category"
         },
         name: {
            type:GraphQLString,
            description:"name of the category"
        }
     }
 })

 export default GqlCategory