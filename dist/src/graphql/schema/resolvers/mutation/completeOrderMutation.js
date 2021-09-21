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
const orderService_1 = require("@src/data/orderService");
const graphql_1 = require("graphql");
const GqlOrder_1 = __importDefault(require("../../typedefs/GqlOrder"));
const CreateOrderInput_1 = __importDefault(require("../../typedefs/CreateOrderInput"));
const createCartMutation = {
    type: GqlOrder_1.default,
    args: {
        input: {
            type: (0, graphql_1.GraphQLNonNull)(CreateOrderInput_1.default),
            description: "product input to be craeted"
        }
    },
    resolve: (__source, { input: { totalPrice, productId } }, __context) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, orderService_1.completeOrder)(totalPrice, productId);
    })
};
exports.default = createCartMutation;
