import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Badge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useAppSelector } from 'redux/hooks'
import { setCustomer } from 'redux/reducers/customer'
import { setCart } from 'redux/reducers/cart'
import { userInfo, getCart } from 'api'
import './index.css'

const RightMenu: React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const token = useAppSelector(s => s.customer.token)
    const cartItemsLength = useAppSelector(s => s.cart.items.length)

    useEffect(() => {
        if (!token) return
        ;(async function() {
            try {
                const user = await userInfo(token)
                dispatch(setCustomer(user))
                const cart = await getCart(token)
                dispatch(setCart(cart))
            } catch (err) {
                console.log(err)
            }
        })()
    }, [token])

    return (
        <Grid container spacing={2} id="rightmenu" justifyContent="flex-end">
            <Grid item>
                <IconButton aria-label="account" onClick={() => history.push('/account')}>
                    <PersonOutlinedIcon/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Grid>
             <Grid item>
                <IconButton aria-label="cart" onClick={() => history.push('/cart')}>
                    <Badge color="secondary" invisible={!cartItemsLength} badgeContent={cartItemsLength}>
                        <ShoppingBagOutlinedIcon  />
                    </Badge>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default RightMenu