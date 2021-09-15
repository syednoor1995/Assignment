import {   GraphQLInputObjectType, GraphQLNonNull,  GraphQLString } from "graphql";
import GqlProduct from "./GqlProduct";

 const CreateOrderInput = new GraphQLInputObjectType({
     name : "CreateOrderInput",
     description: "Create order input",
     fields: {
         
        
        productId: {
            type:GraphQLString,
            description:"name of the category"
        },
        
     }
 })

 export default CreateOrderInput