export type ProductsType = {
    itemPizza: ProductType[],
    itemCoffee: ProductType[],
    itemCocktail: ProductType[]
}

export type ProductType = {
    id: number,
    title: string,
    description: string,
    price: number
    urlPng: string
    urlWebp: string
    popular: number
}

export type BasketProductType = {
    id: string
    title: string
    description: string
    price: number
    url: string
    count: number
    sumProduct: number
    popular: number
}