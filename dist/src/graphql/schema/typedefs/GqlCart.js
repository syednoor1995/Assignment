"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const GqlProduct_1 = __importDefault(require("./GqlProduct"));
const GqlCart = new graphql_1.GraphQLObjectType({
    name: "cart",
    description: "A cart",
    fields: {
        id: {
            type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID),
            description: "id of the cart"
        },
        quantity: {
            type: graphql_1.GraphQLString,
            description: "quantity of the product added to cart"
        },
        productId: {
            type: graphql_1.GraphQLString,
            description: "id of the product added to cart"
        },
        Product: {
            type: GqlProduct_1.default,
            description: "id of the product added to cart"
        },
    }
});
exports.default = GqlCart;
