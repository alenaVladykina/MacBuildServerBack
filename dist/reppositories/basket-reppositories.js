"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basketRepositories = void 0;
const data_1 = require("../data/data");
exports.basketRepositories = {
    findProducts() {
        return {
            sumBasket: data_1.basket.reduce((acc, value) => acc + (value.price * value.count), 0),
            count: data_1.basket.reduce((acc, value) => acc + (value.count), 0),
            items: [...data_1.basket]
        };
    },
    createProduct(product) {
        const findProduct = data_1.basket.find(p => p.id === product.id);
        if (findProduct) {
            const index = data_1.basket.findIndex((p) => p.id === product.id);
            const newProduct = Object.assign(Object.assign({}, findProduct), { count: findProduct.count + 1 });
            if (index !== -1)
                data_1.basket.splice(index, 1, newProduct);
            return newProduct;
        }
        else {
            const newProduct = Object.assign(Object.assign({}, product), { count: 1, sumProduct: product.price });
            data_1.basket.push(newProduct);
            return newProduct;
        }
    },
    deleteProduct(id) {
        for (let i = 0; i < data_1.basket.length; i++) {
            if (data_1.basket[i].id === id) {
                data_1.basket.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    lowerCountProduct(id) {
        debugger;
        const findProduct = data_1.basket.find(p => p.id === id);
        if (findProduct) {
            const index = data_1.basket.findIndex((p) => p.id === id);
            const newProduct = Object.assign(Object.assign({}, findProduct), { count: findProduct.count - 1 });
            if (index !== -1)
                data_1.basket.splice(index, 1, newProduct);
            return newProduct;
        }
    }
};
