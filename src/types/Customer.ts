import type { Address } from './Address'

export interface Customer {
    address: Address
    created: number
    delinquent: boolean
    email: string
    id: string
    invoice_prefix: string
    name: string
    phone: number | null
    shipping: Address
    token: string | null
}

