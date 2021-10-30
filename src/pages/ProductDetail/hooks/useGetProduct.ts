import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductType } from '../../../types/Product'

type IReturn = [
    boolean,
    ProductType,
    string[]
]

export default function useGetProduct(): IReturn {
    const [loading, setLoading] = useState(true)
    const params = useParams() as { [k: string]: any }
    const [product, setProduct] = useState({} as ProductType)
    const images = product.images

    useEffect(() => {
        ;(async function() {
            try {
                const res = await fetch('http://localhost:3001/product', {
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        productId: params?.id
                    })
                }).then(res => res.json())

                setProduct(res)

            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        })()
    }, [])


    return [loading, product, images]
}