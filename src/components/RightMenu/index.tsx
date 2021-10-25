import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { useAppSelector } from '../../redux/hooks'
import { setCustomer } from '../../redux/reducers/customer'
import { userInfo } from '../../api'
import './index.css'

const RightMenu: React.FC = () => {
    const dispatch = useDispatch()
    const token = useAppSelector(s => s.customer.token)

    useEffect(() => {
        if (!token) return
        ;(async function() {
            try {
                const res = await userInfo(token)
                dispatch(setCustomer(res))
            } catch (err) {
                console.log(err)
            }
        })()
    }, [token])

    return (
        <MenuList id="rightmenu">
             <MenuItem>
                <SearchIcon />
            </MenuItem>
             <MenuItem>
                <ShoppingBasketOutlinedIcon />
            </MenuItem>
        </MenuList>
    )
}

export default RightMenu