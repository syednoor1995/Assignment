"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const getAllCategoryQuery_1 = __importDefault(require("./getAllCategoryQuery"));
const getAllProduct_1 = __importDefault(require("./getAllProduct"));
const getAllCart_1 = __importDefault(require("./getAllCart"));
const getAllOrder_1 = __importDefault(require("./getAllOrder"));
const query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        category: getAllCategoryQuery_1.default,
        product: getAllProduct_1.default,
        cart: getAllCart_1.default,
        order: getAllOrder_1.default
    }
});
exports.default = query;
