import React from 'react';
import logo from '../../randit.png';
import './header.css'

// Components capitalised
const Header = () => {
    return(
        <div id='header-container'>
            <img src={logo} alt='Randit logo' id='logo' />
            <h1><a href='randitclient.netlify.app' id='page-name'>RANDIT</a></h1>
        </div>
    )
}

export default Header;