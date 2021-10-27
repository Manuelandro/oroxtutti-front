import React from 'react'
import Helmet from 'react-helmet'
import './index.css'
import Grid from '@mui/material/Grid';
import useGetProduts from './hooks/useGetProducts'
import ListItem from 'components/Product/ListItem'


const Home: React.FC = () => {
    const [products] = useGetProduts()


    return (
        <>
            <Helmet>
                <title>Monile</title>
            </Helmet>
            <Grid container spacing={4}>
                {products.map(product => (
                    <ListItem product={product} />
                ))}
            </Grid>
        </>
    )
}

export default Home