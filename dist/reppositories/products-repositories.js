"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepositories = void 0;
const data_1 = require("../data/data");
exports.productsRepositories = {
    findProducts(title) {
        return data_1.products;
    }
};
