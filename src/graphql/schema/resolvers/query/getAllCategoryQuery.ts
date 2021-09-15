import { getAllCategory } from "@src/data/categoryService";
import { Category } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { GraphQLList } from "graphql";
import GqlCategory from "../../typedefs/GqlCategory";



const getAllCategorysQuery = {
    type:GraphQLList(GqlCategory),
    resolve : async(
        __source:unknown,
        __args:unknown,
        __context: IApolloServerContext,
        __info: unknown
    ): Promise<Category[]> => {
        return getAllCategory()
    }
}

export default getAllCategorysQuery