"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = __importDefault(require("@src/graphql/schema/schema"));
const codegen_1 = require("./codegen");
const client_1 = __importDefault(require("@src/prisma/client"));
const apollo_server_core_1 = require("apollo-server-core");
const startServer = () => {
    (0, codegen_1.performAstCodegen)();
    const context = {
        prisma: client_1.default
    };
    const server = new apollo_server_1.ApolloServer({
        schema: schema_1.default,
        context,
        plugins: [
            (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)(),
        ],
    });
    server.listen().then(({ url }) => {
        console.log(`Ready at ${url}graphql`);
    })
        .catch(err => console.log(err));
};
startServer();
