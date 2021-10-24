import { useState,useEffect } from 'react'
import { ProductType } from '../../../types/Product'

export default function useGetProduts() {
    const [products, setProducts] = useState([] as ProductType[])


    useEffect(() => {
        ;(async function() {
            try {
                const res = await fetch('http://localhost:3001/products/list', {
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        limit: 4
                    })
                }).then(res => res.json())

                setProducts(res.products.data)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])


    return [products]

}