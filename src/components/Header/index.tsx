import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from 'assets/images/logo.png'
import MainMenu from '../MainMenu'
import RightMenu from '../RightMenu'
import './index.css'

const Header: React.FC = () => {
    const history = useHistory()

    return (
        <div className="header">
            <RightMenu />
            <img src={logo} alt="" onClick={() => history.push('/')}/>
            <MainMenu />
        </div>
    )
}

export default Header