import { createProduct } from "@src/data/productService";
import { Product } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import {  GraphQLNonNull } from "graphql";
import GqlProduct from "../../typedefs/GqlProduct";
import CreateProductInput from "../../typedefs/CreateProductInput";



const createProductMutation = {
    type:GqlProduct,
    args:{
        input: {
            type: GraphQLNonNull(CreateProductInput),
            description: "product input to be craeted"
        }
    },
    resolve : async(
        __source:unknown,
        {input:{name,description,categoryId,price}}:any,
        __context: IApolloServerContext
    ): Promise<Product> => {
        return createProduct(name,description,categoryId,price)
    }
}

export default createProductMutation