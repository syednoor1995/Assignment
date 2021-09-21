import { GraphQLObjectType } from "graphql";
import createCategoryMutation from "./createCategoryMutation";
import createProductMutation from "./createProductMutation";
import addCartMutation from "./addCartMutation";
import removeCartMutation from "./removeCartMutation";
import completeOrderMutation from "./completeOrderMutation";
import createUserMutation from "./createUserMutation";


const mutation = new GraphQLObjectType({
    name:"Mutation",
    fields: {
        createCategory: createCategoryMutation,
        createProduct:createProductMutation,
        addCart:addCartMutation,
        removeCart:removeCartMutation,
        completeOrder:completeOrderMutation,
        createUser:createUserMutation
    }
})

export default mutation