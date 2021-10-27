import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer';
import './index.css'

const MainMenu: React.FC = () => {
    const history = useHistory()
    const [drawer, setDrawer] = useState(false)

    const goToCategory = (category: string) => history.push(`/category/${category}`)

    return (
        <>
            <Stack id="mainmenu" direction="row" spacing={1}>
                <ListItemText onClick={() => goToCategory('per-lei')}>Per Lei</ListItemText>
                <ListItemText onClick={() => goToCategory('per-lui')}>Per Lui</ListItemText>
                <ListItemText onClick={() => goToCategory('per-i-piccoli')}>Per i Piccoli</ListItemText>
                <ListItemText onClick={() => goToCategory('per-il-tuo-tempo')}>Per il Tuo Tempo</ListItemText>
                <ListItemText onClick={() => goToCategory('per-sempre')}>Per Sempre</ListItemText>
            </Stack>
            <MenuIcon id="leftburger" onClick={() => setDrawer(true)} />
            <Drawer
                anchor="left"
                open={drawer}
                onClose={() => setDrawer(false)}
            >
                <MenuList>
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
            </Drawer>
        </>
    )
}

export default MainMenu