import React from 'react'
import logo from '../../assets/images/logo.png'
import MainMenu from '../MainMenu'
import './index.css'

const Header: React.FC = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <MainMenu />
        </div>
    )
}

export default Header