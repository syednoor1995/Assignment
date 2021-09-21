import {   GraphQLInputObjectType, GraphQLNonNull,  GraphQLString } from "graphql";
import GqlProduct from "./GqlProduct";

 const CreateOrderInput = new GraphQLInputObjectType({
     name : "CreateOrderInput",
     description: "Create order input",
     fields: {
         
        
       userId:{
        type:GraphQLString,
        description:"id of the user who added product to cart"
       },
        productId: {
            type:GraphQLString,
            description:"name of the category"
        },
        
     }
 })

 export default CreateOrderInput