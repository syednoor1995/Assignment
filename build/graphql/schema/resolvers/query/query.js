"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var getAllCategoryQuery_1 = __importDefault(require("./getAllCategoryQuery"));
var getAllProduct_1 = __importDefault(require("./getAllProduct"));
var getAllCart_1 = __importDefault(require("./getAllCart"));
var getAllOrder_1 = __importDefault(require("./getAllOrder"));
var query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        category: getAllCategoryQuery_1.default,
        product: getAllProduct_1.default,
        cart: getAllCart_1.default,
        order: getAllOrder_1.default
    }
});
exports.default = query;
