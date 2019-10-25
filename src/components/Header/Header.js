import React from 'react'
import logo from '../../assets/logo.svg'

import './style.css'

function Header() {
    return (
        <div className="header">
            <div className="content">
                <img src={logo} alt="Facebook logo"/>
                <span className="profile">Meu perfil</span>
            </div>
        </div>
    )
}

export default Header
