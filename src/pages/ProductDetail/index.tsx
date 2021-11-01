import React from 'react'
import numeral from 'numeral'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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

    const inCart = cart?.items?.find(item => item.id === product.id)


    return (
        <Grid container spacing={2} className="product-detail">
            <Grid item sm={6}>
                <Box className="product-image">
                    <img src={images[0]} alt={product.name}/>
                </Box>
            </Grid>
            <Grid item sm={6} className="details">
                <Typography variant="h4" className='title'>
                    {product.name}
                </Typography>
                <Typography variant="h5" className="price">
                    <strong>€ {numeral(product.price.unit_amount / 100).format('0.00')}</strong> <span>IVA incl.</span>
                </Typography>
                <Typography variant="body1" className="description">
                    {product.description}
                </Typography>
                {inCart ? (
                    <div className="actions">
                        <Button variant="contained" onClick={() => update(inCart.qty - 1)} className="qty">-</Button>
                        <Typography variant="h5">{inCart.qty}</Typography>
                        <Button variant="contained" onClick={() => update(inCart.qty + 1)} className="qty">+</Button>
                    </div>
                ) : (
                    <div className="actions">
                        <Button variant="contained" onClick={addToCart}>Aggiungi</Button>
                    </div>
                )}
            </Grid>
        </Grid>
    )

}

export default ProductDetail