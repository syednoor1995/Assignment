import { GraphQLObjectType } from "graphql";
import getAllCategoryQuery from "./getAllCategoryQuery";
import getAllProduct from "./getAllProduct";
import getAllCartQuery from "./getAllCart";
import getAllOrder from "./getAllOrder";

const query = new GraphQLObjectType({
    name:"Query",
    fields: {
        category: getAllCategoryQuery,
        product:getAllProduct,
        cart:getAllCartQuery,
        order:getAllOrder
        
    }
})

export default query