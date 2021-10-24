import React from 'react'
import Helmet from 'react-helmet'
import Container from '@mui/material/Container'
import { CardElement } from '@stripe/react-stripe-js';
import usePay from './hooks/usePay';


const Cart: React.FC = () => {
    const [stripe, handleSubmit] = usePay()

    return (
        <>
            <Helmet>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Helmet>
            <Container>
            <form>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            </Container>
        </>
    )
}

export default Cart