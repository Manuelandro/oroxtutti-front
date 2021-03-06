import { createSlice } from '@reduxjs/toolkit'
import type { Cart } from '../../types/Cart'

const initialState: Cart = {
    customerId: '',
    total: 0,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, { payload }) => {
            return { ...payload.cart }
        },
        clearCart: () => {
            return { ...initialState }
        }
    }
})

export const { setCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
