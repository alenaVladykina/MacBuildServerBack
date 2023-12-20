"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_repositories_1 = require("../reppositories/products-repositories");
exports.productsRouter = (0, express_1.Router)({});
exports.productsRouter.get('/', (req, res) => {
    const title = typeof (req.query.title) === 'string' ? req.query.title : null;
    const products = products_repositories_1.productsRepositories.findProducts(title);
    res.send(products);
});
// productsRouter.get('/', (req: Request, res: Response) => {
//   const products = productsRepositories
//     .findProducts(typeof (req.query.title) === 'string' ?
//       req.query.title
//       : null
//     )
//   res.send(products)
// })
// productsRouter.post('/', (req: Request, res: Response) => {
//   const newProducts = productsRepositories.createProduct(req.body.title)
//   console.log(newProducts)
//   res.status(201).send(newProducts)
// })
// productsRouter.delete('/:id', (req: Request, res: Response) => {
//   const isDeleted = productsRepositories.deleteProduct(+req.params.id)
//   if (isDeleted) {
//     res.send(202)
//   } else {
//     res.send(404)
//   }
//   res.send(202)
// })
// productsRouter.put('/:id', (req: Request, res: Response) => {
//   const updateProduct = productsRepositories.updateProduct(+req.params.id, req.body.title)
//   if (updateProduct) {
//     res.send(updateProduct)
//   } else {
//     res.send(404)
//   }
// })
// productsRouter.get('/:productTitle', (req: Request, res: Response) => {
//   const getProduct = productsRepositories.findProduct(req.body.title)
//   if (getProduct) {
//     res.send(getProduct)
//   } else {
//     res.send(404)
//   }
// })
