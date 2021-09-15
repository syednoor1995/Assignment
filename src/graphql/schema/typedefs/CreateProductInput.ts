import {   GraphQLFloat, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull,  GraphQLString } from "graphql";

 const CreateProductInput = new GraphQLInputObjectType({
     name : "CreateproductInput",
     description: "Create product input",
     fields: {
         
         name: {
            type:GraphQLNonNull(GraphQLString),
            description:"An arbitrary integar"
        },
        description: {
            type:GraphQLNonNull(GraphQLString),
            description:"An arbitrary integar"
        },
        categoryId: {
            type:GraphQLNonNull(GraphQLString),
            description:"An arbitrary integar"
        },
        price:{
            type:GraphQLFloat,
            description:"description of the product"
        },
     }
 })

 export default CreateProductInput