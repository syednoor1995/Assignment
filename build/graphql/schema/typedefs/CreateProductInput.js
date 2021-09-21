"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var CreateProductInput = new graphql_1.GraphQLInputObjectType({
    name: "CreateproductInput",
    description: "Create product input",
    fields: {
        name: {
            type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString),
            description: "An arbitrary integar"
        },
        description: {
            type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString),
            description: "An arbitrary integar"
        },
        categoryId: {
            type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString),
            description: "An arbitrary integar"
        },
        price: {
            type: graphql_1.GraphQLFloat,
            description: "description of the product"
        },
    }
});
exports.default = CreateProductInput;
