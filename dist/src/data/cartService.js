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
exports.removeFromCart = exports.addToCart = exports.getAllCart = void 0;
const client_1 = __importDefault(require("@src/prisma/client"));
const getAllCart = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield client_1.default.cart.findMany({
        include: {
            Product: true,
        },
    });
    console.log(result);
    return result;
});
exports.getAllCart = getAllCart;
const addToCart = (quantity, productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield client_1.default.cart.findFirst({ where: { productId: productId }, include: {
            Product: true,
        }, });
    if (product) {
        const quantityUpdated = product.quantity + parseInt(quantity);
        return client_1.default.cart.update({
            where: { productId: productId },
            include: {
                Product: true,
            },
            data: {
                quantity: quantityUpdated,
            },
        });
    }
    else {
        return client_1.default.cart.create({
            include: {
                Product: true,
            },
            data: {
                quantity: parseInt(quantity),
                Product: {
                    connect: { id: productId },
                },
            },
        });
    }
});
exports.addToCart = addToCart;
const removeFromCart = (quantity, productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield client_1.default.cart.findFirst({ where: { productId: productId }, include: {
            Product: true,
        }, });
    if (product) {
        const quantityUpdated = product.quantity - parseInt(quantity);
        if (quantityUpdated === 0) {
            return client_1.default.cart.delete({
                where: { productId: productId }, include: {
                    Product: true,
                },
            });
        }
        return client_1.default.cart.update({
            where: { productId: productId }, include: {
                Product: true,
            },
            data: {
                quantity: quantityUpdated,
            },
        });
    }
    else {
        return null;
    }
});
exports.removeFromCart = removeFromCart;
