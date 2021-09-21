"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var GqlProduct_1 = __importDefault(require("./GqlProduct"));
var GqlOrder = new graphql_1.GraphQLObjectType({
    name: "Order",
    description: "Order history",
    fields: {
        id: {
            type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID),
            description: "id of the category"
        },
        totalPrice: {
            type: graphql_1.GraphQLString,
            description: "name of the category"
        },
        productId: {
            type: graphql_1.GraphQLString,
            description: "name of the category"
        },
        Product: {
            type: GqlProduct_1.default,
            description: "id of the product added to cart"
        },
    }
});
exports.default = GqlOrder;
