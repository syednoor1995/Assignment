"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const CreateCartInput = new graphql_1.GraphQLInputObjectType({
    name: "CreateCartInput",
    description: "Create cart input",
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
exports.default = CreateCartInput;
