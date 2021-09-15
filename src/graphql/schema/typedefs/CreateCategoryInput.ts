import {   GraphQLInputObjectType, GraphQLNonNull,  GraphQLString } from "graphql";

 const CreateCategoryInput = new GraphQLInputObjectType({
     name : "CreateCategoryInput",
     description: "Create category input",
     fields: {
         
         name: {
            type:GraphQLNonNull(GraphQLString),
            description:"An arbitrary integar"
        }
     }
 })

 export default CreateCategoryInput