import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Customer } from '../../types/Customer'

const initialState: Customer = {
    address: {},
    delinquent: false,
    email: '',
    id: '',
    invoice_prefix: '',
    name: '',
    phone: null,
    shipping: {},
    token: localStorage.getItem('token')
}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setCustomer: (state, action: PayloadAction<Record<string, any>>) => {
            state.address = action.payload.address
            state.delinquent = action.payload.delinquent
            state.email = action.payload.email
            state.id = action.payload.id
            state.invoice_prefix = action.payload.invoice_prefix
            state.name = action.payload.name
            state.phone = action.payload.phone
            state.shipping = action.payload.shipping
        },
        setCustomerToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        clearCustomer: (state) => {
            state.address = {}
            state.delinquent = false
            state.email = ''
            state.id = ''
            state.invoice_prefix = ''
            state.name = ''
            state.phone = null
            state.shipping = {}
            state.token = null
        }
    }
})

export const { setCustomer, setCustomerToken, clearCustomer } = customerSlice.actions
export default customerSlice.reducer
