"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const CreateCategoryInput = new graphql_1.GraphQLInputObjectType({
    name: "CreateCategoryInput",
    description: "Create category input",
    fields: {
        name: {
            type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString),
            description: "An arbitrary integar"
        }
    }
});
exports.default = CreateCategoryInput;
