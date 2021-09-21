"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const GqlCategory_1 = __importDefault(require("./GqlCategory"));
const GqlProduct = new graphql_1.GraphQLObjectType({
    name: "product",
    description: "A product",
    fields: {
        id: {
            type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID),
            description: "id of the product"
        },
        name: {
            type: graphql_1.GraphQLString,
            description: "name of the product"
        },
        description: {
            type: graphql_1.GraphQLString,
            description: "description of the product"
        },
        price: {
            type: graphql_1.GraphQLFloat,
            description: "description of the product"
        },
        Category: {
            type: (0, graphql_1.GraphQLList)(GqlCategory_1.default),
            description: "category of the product"
        }
    }
});
exports.default = GqlProduct;
