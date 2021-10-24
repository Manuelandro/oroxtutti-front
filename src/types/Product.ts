export interface ProductType {
    id: string
    object: "product"
    active: boolean
    attributes: string[]
    created: number
    description: string
    images: string[]
    livemode: boolean
    metadata: { [k: string]: string }
    name: string
    package_dimensions: number
    shippable: null
    statement_descriptor: null
    tax_code: null
    type: string
    unit_label: null
    updated: number
    url: null
}