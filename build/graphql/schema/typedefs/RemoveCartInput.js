"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var RemoveCartInput = new graphql_1.GraphQLInputObjectType({
    name: "RemoveCartInput",
    description: "remove cart input",
    fields: {
        quantity: {
            type: graphql_1.GraphQLString,
            description: "quantity of the product added to cart"
        },
        productId: {
            type: graphql_1.GraphQLString,
            description: "id of the product added to cart"
        },
    }
});
exports.default = RemoveCartInput;
