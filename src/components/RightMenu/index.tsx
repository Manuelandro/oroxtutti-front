import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/Search';
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
                <PersonOutlinedIcon onClick={() => history.push('/account')}/>
            </Grid>
            <Grid item>
                <SearchIcon />
            </Grid>
             <Grid item>
                <ShoppingBagOutlinedIcon onClick={() => history.push('/cart')} />
            </Grid>
        </Grid>
    )
}

export default RightMenu