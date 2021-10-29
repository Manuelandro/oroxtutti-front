import React from 'react'
import Helmet from 'react-helmet'
import Container from '@mui/material/Container'
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppSelector } from 'redux/hooks'
import usePay from './hooks/usePay';
import useRemoveFromCart from './hooks/useRemoveFromCart'

const Cart: React.FC = () => {
    const cart = useAppSelector(s => s.cart)
    const [goToCheckout] = usePay()
    const [loadingRemove, remove] = useRemoveFromCart()

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
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <DeleteIcon onClick={() => remove(item.id)} />
                    </div>
                ))}
                <form>
                    <button type="submit" onClick={goToCheckout}>
                        Pay
                    </button>
                </form>
            </Container>
        </>
    )
}

export default Cart