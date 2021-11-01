import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useOrders from '../hooks/useOrders'


const Orders: React.FC = () => {
    const [loading, orders] = useOrders()


    return (
        <Box>
            <Typography variant="h4">
                I Miei Ordini
            </Typography>
        </Box>
    )
}

export default Orders