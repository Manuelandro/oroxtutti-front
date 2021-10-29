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

export interface Session {
    id: string
    object: "checkout.session"
    after_expiration: null
    allow_promotion_codes: null
    amount_subtotal: number
    amount_total: number
    automatic_tax: {
      enabled: boolean
      status: null
    }
    billing_address_collection: string
    cancel_url: string
    client_reference_id: null
    consent: null
    consent_collection: null
    currency: string
    customer: null
    customer_details: null
    customer_email: string
    expires_at: number
    livemode: boolean
    locale: null
    metadata: any
    mode: "payment"
    payment_intent: string
    payment_method_options: any
    payment_method_types: string[]
    payment_status: "paid" | "unpaid"
    phone_number_collection: {
      enabled: boolean
    },
    recovered_from: null
    setup_intent: null
    shipping: null
    shipping_address_collection: null
    submit_type: string
    subscription: null
    success_url: string
    total_details: {
      amount_discount: number
      amount_shipping: number
      amount_tax: number
    }
    url: string
}