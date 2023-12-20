import { Request, Response, Router } from "express";
import { productsRepositories } from "../reppositories/products-repositories";
import { ProductsType } from '../types/types'


export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
  const title = typeof (req.query.title) === 'string' ? req.query.title : null
  const products: ProductsType = productsRepositories.findProducts(title)
  res.send(products)
})



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