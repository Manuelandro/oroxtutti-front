import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import type { ProductType } from '../../../types/Product'

interface params {
    category: string
}

export default function useGetProduts() {
    const params: params = useParams()
    const [products, setProducts] = useState([] as ProductType[])


    useEffect(() => {
        setProducts([])

        ;(async function() {
            try {
                const res = await fetch('http://localhost:3001/products/list', {
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        limit: 9999
                    })
                }).then(res => res.json())

                setProducts(res.products.data.filter((prod: ProductType) => prod.metadata.categoria === params.category))
            } catch (err) {
                console.log(err)
            }
        })()
    }, [params])


    return [products]

}