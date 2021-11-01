import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useAppSelector } from 'redux/hooks'

const Informations: React.FC = () => {
    const customer = useAppSelector(s => s.customer)

    return (
        <Box>
            <Typography variant="h4">
                Informazioni Personali
            </Typography>
            <Typography variant="subtitle1">
                Nome e Cognome
            </Typography>
            <Typography variant="subtitle1">
                {customer.name}
            </Typography>
            <Typography variant="subtitle1">
                Email
            </Typography>
            <Typography variant="subtitle1">
                {customer.email}
            </Typography>
            <Typography variant="subtitle1">
                Idenficativo fattura
            </Typography>
            <Typography variant="subtitle1">
                {customer.invoice_prefix}
            </Typography>
        </Box>
    )
}

export default Informations