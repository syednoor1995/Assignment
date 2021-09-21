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
exports.completeOrder = exports.getOrderHistory = void 0;
const client_1 = __importDefault(require("@src/prisma/client"));
const getOrderHistory = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield client_1.default.order.findMany({
        include: {
            Product: true,
        },
    });
    return result;
});
exports.getOrderHistory = getOrderHistory;
const completeOrder = (quantity, productId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const product = yield client_1.default.cart.findFirst({ where: { productId: productId }, include: {
            Product: true,
        }, });
    if (product) {
        const price = ((_a = product.Product) === null || _a === void 0 ? void 0 : _a.price) || 0;
        return client_1.default.order.create({
            data: {
                productId,
                totalPrice: 300
            }
        });
    }
    else {
        return null;
    }
});
exports.completeOrder = completeOrder;
