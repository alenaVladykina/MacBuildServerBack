import { Router } from "express";
import { basketRepositories } from "../reppositories/basket-reppositories";


export const basketRouter = Router({})

basketRouter.get('/', (req: any, res: any) => {
    const title = typeof (req.query.title) === 'string' ?
        req.query.title : null
    const basket = basketRepositories.findProducts()
    res.send(basket)
})

basketRouter.post('/', (req: any, res: any) => {
    const newProduct = basketRepositories.createProduct(req.body.product)
    res.status(201).send(newProduct)
    console.log(newProduct);
})


basketRouter.delete('/', (req: any, res: any) => {
    const product = basketRepositories.deleteProduct(req.body.id)
    if (product) {
        res.status(201).send("Product no Delete")
    } else {
        res.status(404).send("Product no Delete")
    }
})


basketRouter.patch('/', (req: any, res: any) => {
    console.log(req);
    debugger
    const product = basketRepositories.lowerCountProduct(req.body.data.id)
    debugger
    if (product) {
        res.status(201).send(product)
    } else {
        res.status(404).send("Product no Delete")
    }
})


