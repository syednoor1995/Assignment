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
exports.createProduct = exports.getAllProduct = void 0;
const client_1 = __importDefault(require("@src/prisma/client"));
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield client_1.default.product.findMany({
        include: {
            Category: true,
        },
    });
    return result;
});
exports.getAllProduct = getAllProduct;
const createProduct = (name, description, categoryId, price) => __awaiter(void 0, void 0, void 0, function* () {
    return client_1.default.product.create({
        data: {
            name,
            description,
            price,
            Category: {
                connect: [{ id: categoryId }],
            },
        },
    });
});
exports.createProduct = createProduct;
