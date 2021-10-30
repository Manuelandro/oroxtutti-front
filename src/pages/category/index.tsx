import React from 'react'
import Grid from '@mui/material/Grid'
import ListItem from 'components/Product/ListItem'
import useGetProducts from './hooks/useGetProducts'
import './index.css'

const Category: React.FC = () => {
  const [products] = useGetProducts()


    return (
        <Grid container spacing={2}>
            {products.map(product => (
                <ListItem product={product} />
            ))}
        </Grid>
    )
}

export default Category