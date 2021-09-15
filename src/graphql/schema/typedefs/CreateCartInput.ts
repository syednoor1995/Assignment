import {   GraphQLInputObjectType,  GraphQLString } from "graphql";

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
     }
 })

 export default CreateCartInput