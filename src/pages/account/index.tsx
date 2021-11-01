import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import Informations from './components/Informations'
import Orders from './components/Orders'
import useLogout from './hooks/useLogout';
import './index.css'

const Account: React.FC = () => {
    const [section, setSection] = useState('informations')
    const [logout] = useLogout()

    return (
        <Grid className="account" container spacing={2}>
            <Grid item xs={12} sm={4} className="left">
                <MenuList>
                    <MenuItem
                        className={section === 'informations' ? 'active' : ''}
                        onClick={() => setSection('informations')}
                    >
                        Informazioni
                    </MenuItem>
                    <MenuItem
                        className={section === 'orders' ? 'active' : ''}
                        onClick={() => setSection('orders')}
                    >
                        I miei ordini
                    </MenuItem>
                    <MenuItem
                        className={section === 'addresses' ? 'active' : ''}
                        onClick={() => setSection('addresses')}
                    >
                        I miei indirizzi
                    </MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
            </Grid>
            <Grid item xs={12} sm={8} className="right">
                {/* */}
                {section === 'informations' ? <Informations /> : null}
                {/* */}
                {section === 'orders' ? <Orders /> : null}
            </Grid>
        </Grid>
    )
}

export default Account