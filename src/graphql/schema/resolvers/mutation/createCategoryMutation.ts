import { createCategory } from "@src/data/categoryService";
import { Category } from "@prisma/client";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import {  GraphQLNonNull } from "graphql";
import GqlCategory from "../../typedefs/GqlCategory";
import CreateCategoryInput from "../../typedefs/CreateCategoryInput";



const createCategoryMutation = {
    type:GqlCategory,
    args:{
        input: {
            type: GraphQLNonNull(CreateCategoryInput),
            description: "category input to be craeted"
        }
    },
    resolve : async(
        __source:unknown,
        {input:{name}}:any,
        __context: IApolloServerContext
    ): Promise<Category> => {
        return createCategory(name)
    }
}

export default createCategoryMutation