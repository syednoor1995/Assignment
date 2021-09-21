import {   GraphQLInputObjectType,  GraphQLInt,  GraphQLString } from "graphql";

 const CreateCartInput = new GraphQLInputObjectType({
     name : "CreateCartInput",
     description: "Create cart input",
     fields: {
        
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
        description:"id of the user who added product to cart"
       }
     }
 })

 export default CreateCartInput