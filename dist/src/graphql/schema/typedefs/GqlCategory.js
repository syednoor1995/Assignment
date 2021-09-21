"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const GqlCategory = new graphql_1.GraphQLObjectType({
    name: "Category",
    description: "A category",
    fields: {
        id: {
            type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID),
            description: "id of the category"
        },
        name: {
            type: graphql_1.GraphQLString,
            description: "name of the category"
        }
    }
});
exports.default = GqlCategory;
