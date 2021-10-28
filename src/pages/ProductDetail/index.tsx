import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImageGallery from 'react-image-gallery';
import useGetProduct from './hooks/useGetProduct';
import useAddToCart from './hooks/useAddToCart'
import useUpdateQty from './hooks/useUpdateQty';
import { useAppSelector } from 'redux/hooks';
import "react-image-gallery/styles/css/image-gallery.css";
import './index.css'

const ProductDetail: React.FC = () => {
    const cart = useAppSelector(s => s.cart)
    const [loading, product, images] = useGetProduct()
    const [loadingAdd, addToCart] = useAddToCart()
    const [loadingUpdate, update] = useUpdateQty()

    if (loading) {
        return null
    }

    const inCart = cart.items.find(item => item.id === product.id)


    return (
        <Grid container spacing={4} className="product-detail">
            <Grid item>
                <Typography variant="h2">
                    {product.name}
                </Typography>
                <ImageGallery items={images} showThumbnails={images.length > 1}/>
            </Grid>
            <Grid item>
                {inCart ? (
                    <>
                        <Button variant="contained" onClick={() => update(inCart.qty - 1)}>-</Button>
                        {inCart.qty}
                        <Button variant="contained" onClick={() => update(inCart.qty + 1)}>+</Button>
                    </>
                ) : (
                    <Button variant="contained" onClick={addToCart}>Add to Cart</Button>
                )}
            </Grid>
        </Grid>
    )

}

export default ProductDetail