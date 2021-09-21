"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const query_1 = __importDefault(require("@src/graphql/schema/resolvers/query/query"));
const mutation_1 = __importDefault(require("./resolvers/mutation/mutation"));
const schema = new graphql_1.GraphQLSchema({
    query: query_1.default,
    mutation: mutation_1.default
});
exports.default = schema;
