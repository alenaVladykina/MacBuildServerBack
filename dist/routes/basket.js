"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basketRouter = void 0;
const express_1 = require("express");
const basket_reppositories_1 = require("../reppositories/basket-reppositories");
exports.basketRouter = (0, express_1.Router)({});
exports.basketRouter.get('/', (req, res) => {
    const title = typeof (req.query.title) === 'string' ?
        req.query.title : null;
    const basket = basket_reppositories_1.basketRepositories.findProducts();
    res.send(basket);
});
exports.basketRouter.post('/', (req, res) => {
    const newProduct = basket_reppositories_1.basketRepositories.createProduct(req.body.product);
    res.status(201).send(newProduct);
    console.log(newProduct);
});
exports.basketRouter.delete('/', (req, res) => {
    const product = basket_reppositories_1.basketRepositories.deleteProduct(req.body.id);
    if (product) {
        res.status(201).send("Product no Delete");
    }
    else {
        res.status(404).send("Product no Delete");
    }
});
exports.basketRouter.patch('/', (req, res) => {
    console.log(req);
    debugger;
    const product = basket_reppositories_1.basketRepositories.lowerCountProduct(req.body.data.id);
    debugger;
    if (product) {
        res.status(201).send(product);
    }
    else {
        res.status(404).send("Product no Delete");
    }
});
