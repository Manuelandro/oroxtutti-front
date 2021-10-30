import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from 'assets/images/logo.png'
import Grid from '@mui/material/Grid'
import MainMenu from '../MainMenu'
import RightMenu from '../RightMenu'
import './index.css'

const Header: React.FC = () => {
    const history = useHistory()

    return (
        <div className="header">
            <Grid container className="header-grid">
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <img src={logo} alt="" onClick={() => history.push('/')}/>
                </Grid>
                <Grid item xs={4}>
                    <RightMenu />
                </Grid>
            </Grid>
            <MainMenu />
        </div>
    )
}

export default Header