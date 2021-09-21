"use strict";
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
const productService_1 = require("@src/data/productService");
const graphql_1 = require("graphql");
const GqlProduct_1 = __importDefault(require("../../typedefs/GqlProduct"));
const getAllProductsQuery = {
    type: (0, graphql_1.GraphQLList)(GqlProduct_1.default),
    resolve: (__source, __args, __context, __info) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, productService_1.getAllProduct)();
    })
};
exports.default = getAllProductsQuery;
