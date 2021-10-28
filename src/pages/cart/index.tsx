import React from 'react'
import Helmet from 'react-helmet'
import Container from '@mui/material/Container'
import { CardElement } from '@stripe/react-stripe-js';
import { useAppSelector } from 'redux/hooks'
import usePay from './hooks/usePay';


const Cart: React.FC = () => {
    const cart = useAppSelector(s => s.cart)
    const [stripe, handleSubmit] = usePay()

    if (!cart.items.length) {
        return (
            <>
                <Helmet>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Helmet>
                <Container>
                    Il tuo carrello è vuoto
                </Container>
            </>
        )
    }


    return (
        <>
            <Helmet>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Helmet>
            <Container>
                {cart.items.map(item => (
                    <p key={item.id}>{item.id}</p>
                ))}
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