import { getAllProduct } from "@src/data/productService";
import { Product } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { GraphQLList } from "graphql";
import GqlProduct from "../../typedefs/GqlProduct";




const getAllProductsQuery = {
    type:GraphQLList(GqlProduct),
    resolve : async(
        __source:unknown,
        __args:unknown,
        __context: IApolloServerContext,
        __info: unknown
    ): Promise<Product[]> => {
        return getAllProduct()
    }
}

export default getAllProductsQuery