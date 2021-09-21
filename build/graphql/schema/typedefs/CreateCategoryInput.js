"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var CreateCategoryInput = new graphql_1.GraphQLInputObjectType({
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
