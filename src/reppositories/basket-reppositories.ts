import {BasketProductType, ProductsType } from "../types/types"
import {basket} from '../data/data'



export const basketRepositories = {

    findProducts() {
        return {
            sumBasket: basket.reduce((acc, value) => acc + (value.price * value.count), 0),
            count: basket.reduce((acc, value) => acc + (value.count), 0),
            items: [...basket]
        }
    },

    createProduct(product: any) {

        const findProduct = basket.find(p => p.id === product.id)
        if (findProduct) {
            const index = basket.findIndex((p) => p.id === product.id)
            const newProduct = { ...findProduct, count: findProduct.count + 1 }
            if (index !== -1) basket.splice(index, 1, newProduct)
            return newProduct
        } else {
            const newProduct: BasketProductType = { ...product, count: 1, sumProduct: product.price }
            basket.push(newProduct)
            return newProduct
        }
    },
    deleteProduct(id: string) {
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].id === id) {
                basket.splice(i, 1)
                return true
            }
        }
        return false
    },
    lowerCountProduct(id: string) {
        debugger
        const findProduct = basket.find(p => p.id === id)
        if (findProduct) {
            const index = basket.findIndex((p) => p.id === id)
            const newProduct = {
                ...findProduct,
                count: findProduct.count - 1
            }
            if (index !== -1) basket.splice(index, 1, newProduct)
            return newProduct
        }
    }
}

