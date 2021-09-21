"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = __importDefault(require("@src/graphql/schema/schema"));
// import dotenv from "dotenv-safe"
var codegen_1 = require("./codegen");
var client_1 = __importDefault(require("@src/prisma/client"));
// dotenv.config()
var startServer = function () {
    (0, codegen_1.performAstCodegen)();
    var context = {
        prisma: client_1.default
    };
    var server = new apollo_server_1.ApolloServer({
        schema: schema_1.default,
        context: context
    });
    server.listen({ port: process.env.PORT || 4000 }).then(function (_a) {
        var url = _a.url;
        console.log("Ready at " + url + "graphql");
    })
        .catch(function (err) { return console.log(err); });
};
startServer();
//cd src && mkdir graphql && cd graphql && mkdir generated && mkdir schema && cd schema && mkdir resolvers && mkdir typedefs && cd resolvers && mkdir query && mkdir mutation && cd ../../../..
// cd src && mkdir data && cd data && mkdir types && cd ../..
