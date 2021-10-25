import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImageGallery from 'react-image-gallery';
import useAddToCart from './hooks/useAddToCart'
import "react-image-gallery/styles/css/image-gallery.css";
import useGetProduct from './hooks/useGetProduct';


const ProductDetail: React.FC = () => {
    const [loading, product, images] = useGetProduct()
    const [loadingAdd, addToCart] = useAddToCart()


    if (loading) {
        return null
    }


    return (
        <Grid container spacing={4}>
            <Grid item>
                <Typography variant="h2">
                    {product.name}
                </Typography>
                <ImageGallery items={images} showThumbnails={images.length > 1}/>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={addToCart}></Button>
            </Grid>
        </Grid>
    )

}

export default ProductDetail