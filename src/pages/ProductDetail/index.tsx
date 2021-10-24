import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageGallery from 'react-image-gallery';
import { ProductType } from '../../types/Product'
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetail: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const params = useParams() as { [k: string]: any }
    const [product, setProduct] = useState({} as ProductType)
    const [price, setPrice] = useState({})

    console.log(params)

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

                const res2 = await fetch('http://localhost:3001/product/price', {
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        productId: params?.id
                    })
                }).then(res => res.json())

                setPrice(res2.price.data[0])

            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        })()
    }, [])


    return (
        <Grid container spacing={4}>
            <Grid item>
                <Typography variant="h2">
                    {product.name}
                </Typography>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    )

}

export default ProductDetail