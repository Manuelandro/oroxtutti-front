import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Customer } from '../../types/Customer'

const initialState: Customer = {
    address: {},
    balance: 0,
    created: 0,
    currency: 'eur',
    default_source: null,
    delinquent: false,
    description: null,
    discount: null,
    email: '',
    id: '',
    invoice_prefix: '',
    invoice_settings: {
        custom_fields: null,
        default_payment_method: null,
        footer: null
    },
    livemode: false,
    metadata: {},
    name: '',
    object: 'customer',
    phone: null,
    preferred_locales: [],
    shipping: {},
    tax_exempt: '',
    token: localStorage.getItem('token')
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCustomer: (state, action: PayloadAction<Record<string, any>>) => {
            state.address = action.payload.address
            state.balance = action.payload.balance
            state.created = action.payload.created
            state.currency = action.payload.currency
            state.default_source = action.payload.default_source
            state.delinquent = action.payload.delinquent
            state.description = action.payload.description
            state.discount = action.payload.discount
            state.email = action.payload.email
            state.id = action.payload.id
            state.invoice_prefix = action.payload.invoice_prefix
            state.invoice_settings = action.payload.invoice_settings
            state.livemode = action.payload.livemode
            state.metadata = action.payload.metadata
            state.name = action.payload.name
            state.object = action.payload.object
            state.phone = action.payload.phone
            state.preferred_locales = action.payload.preferred_locales
            state.shipping = action.payload.shipping
            state.tax_exempt = action.payload.tax_exempt
        },
        setCustomerToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        clearCustomer: (state) => {
            state.id = ""
            state.email = ""
            state.token = null
        }
    }
})

export const { setCustomer, setCustomerToken, clearCustomer } = userSlice.actions
export default userSlice.reducer
