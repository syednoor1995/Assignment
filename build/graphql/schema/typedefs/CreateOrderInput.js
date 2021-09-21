"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var CreateOrderInput = new graphql_1.GraphQLInputObjectType({
    name: "CreateOrderInput",
    description: "Create order input",
    fields: {
        productId: {
            type: graphql_1.GraphQLString,
            description: "name of the category"
        },
    }
});
exports.default = CreateOrderInput;
