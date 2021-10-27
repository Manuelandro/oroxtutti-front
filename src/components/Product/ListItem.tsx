import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMedia } from 'react-use'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';
import type { ProductType } from 'types/Product';

const ListItem: React.FC<{ product: ProductType }> = ({ product }) => {
    const isMobile = useMedia('(max-width: 768px)')
    const history = useHistory()

    return (
        <Grid item xs={isMobile ? 6 : 3} key={product.id} onClick={() => history.push(`/product/${product.id}`)}>
            <Card>
                <img src={product.images[0]} alt={product.name} width="100%" />
                <Typography>{product.name}</Typography>
            </Card>
        </Grid>
    )
}

export default ListItem