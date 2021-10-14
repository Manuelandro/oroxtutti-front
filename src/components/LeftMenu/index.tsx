import React from 'react'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import './index.css'

const LeftMenu: React.FC = () => {
    return (
        <MenuList id="leftmenu">
             <MenuItem>
                <ListItemText>Per Lei</ListItemText>
            </MenuItem>
             <MenuItem>
                <ListItemText>Per Lui</ListItemText>
            </MenuItem>
             <MenuItem>
                <ListItemText>Per i Piccoli</ListItemText>
            </MenuItem>
             <MenuItem>
                <ListItemText>Per il Tuo Tempo</ListItemText>
            </MenuItem>
             <MenuItem>
                <ListItemText>Per Sempre</ListItemText>
            </MenuItem>
        </MenuList>
    )
}

export default LeftMenu