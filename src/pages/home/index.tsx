import React from 'react'
import Helmet from 'react-helmet'
import { useHistory } from 'react-router-dom'
import { useMedia } from 'react-use'
import './index.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';
import useGetProduts from './hooks/useGetProducts'


const Home: React.FC = () => {
    const [products] = useGetProduts()
    const isMobile = useMedia('(max-width: 768px)')
    const history = useHistory()

    return (
        <>
            <Helmet>
                <title>Monile</title>
            </Helmet>
            <Grid container spacing={4}>
                {products.map(product => (
                    <Grid item xs={isMobile ? 6 : 3} key={product.id} onClick={() => history.push(`/product/${product.id}`)}>
                        <Card>
                            <img src={product.images[0]} alt={product.name} width="100%" />
                            <Typography>{product.name}</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Home