import {  GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

 const GqlUser = new GraphQLObjectType({
     name : "User",
     description: "A User",
     fields: {
         id: {
             type:GraphQLNonNull(GraphQLID),
             description:"id of the User"
         },
         name: {
            type:GraphQLString,
            description:"name of the User"
        }
        ,
         email: {
            type:GraphQLString,
            description:"email of the User"
        }
     }
 })

 export default GqlUser