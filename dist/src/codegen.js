"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performAstCodegen = void 0;
const fs = __importStar(require("fs"));
const schemaAstPlugin = __importStar(require("@graphql-codegen/schema-ast"));
const graphql_1 = require("graphql");
const core_1 = require("@graphql-codegen/core");
const path_1 = __importDefault(require("path"));
const schema_1 = __importDefault(require("@src/graphql/schema/schema"));
const client_1 = require(".prisma/client");
function performCodegen(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield (0, core_1.codegen)(options);
        fs.writeFile(path_1.default.join(__dirname, '/graphql/generated/', options.filename), output, () => {
            console.log('Outputs generated!');
        });
    });
}
function performAstCodegen() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            config: {
                numericEnums: true,
                contextType: { prisma: client_1.PrismaClient },
                useIndexSignature: true,
            },
            documents: [],
            filename: 'schema.graphql',
            schema: (0, graphql_1.parse)((0, graphql_1.printSchema)(schema_1.default)),
            plugins: [{ 'schema-ast': {} }],
            pluginMap: {
                'schema-ast': schemaAstPlugin,
            },
        };
        performCodegen(options);
    });
}
exports.performAstCodegen = performAstCodegen;
