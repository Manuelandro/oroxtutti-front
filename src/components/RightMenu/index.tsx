import React, { useEffect } from 'react'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { useAppSelector } from '../../redux/hooks'
import './index.css'

const RightMenu: React.FC = () => {
    const token = useAppSelector(s => s.user.token)

    useEffect(() => {

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