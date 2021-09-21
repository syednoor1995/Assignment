"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const createCategoryMutation_1 = __importDefault(require("./createCategoryMutation"));
const createProductMutation_1 = __importDefault(require("./createProductMutation"));
const addCartMutation_1 = __importDefault(require("./addCartMutation"));
const removeCartMutation_1 = __importDefault(require("./removeCartMutation"));
const completeOrderMutation_1 = __importDefault(require("./completeOrderMutation"));
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createCategory: createCategoryMutation_1.default,
        createProduct: createProductMutation_1.default,
        addCart: addCartMutation_1.default,
        removeCart: removeCartMutation_1.default,
        completeOrder: completeOrderMutation_1.default
    }
});
exports.default = mutation;
