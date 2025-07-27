export interface Sale {
    id: string,
    userId: string,
    date: Date,
    totalAmount: number,
    products: Array<{
        productId: string,
        quantity: number,
        price: number
    }>,
}