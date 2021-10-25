import type { Address } from './Address'

export interface Customer {
    address: Address
    balance: number
    created: number
    currency: 'eur'
    default_source: unknown | null
    delinquent: boolean
    description: string | null
    discount: unknown | null
    email: string
    id: string
    invoice_prefix: string
    invoice_settings: {
        custom_fields: unknown | null,
        default_payment_method: unknown | null,
        footer: unknown | null
    }
    livemode: boolean
    metadata: { [k: string]: any }
    name: string
    object: "customer"
    phone: number | null
    preferred_locales: unknown[]
    shipping: Address
    tax_exempt: string
    token: string | null
}


