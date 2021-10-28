export interface CartItem {
    id: string
    price: number
    qty: number
    subtotal: number
}

export interface Cart {
    customerId: string
    total: number
    items: CartItem[]
}