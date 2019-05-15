import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';
import '../App.css'

import acmudLogo from '../Resources/iconos/BannerACMUD.png'
import userIcon from '../Resources/iconos/avatar.png'
import settingsIcon from '../Resources/iconos/ajustes.png'
import homeIcon from '../Resources/iconos/casa.png'

function Header(props) {
    return (
        <header className='App-header'>
            <a href='http://acm.org' target="_blank" rel="noopener noreferrer">
                <img className='Image-Responsive' alt='logotipo' src={acmudLogo} />
            </a>
            <h1>Modulo Inscripciones a Grupos de Trabajo</h1>
            <div>
                <Link to='/'>
                    <img className='Image-Responsive' alt='homeIcon' src={homeIcon} />
                </Link>
                <Link to='/Settings'>
                    <img className='Image-Responsive' alt='settingsIcon' src={settingsIcon} />
                </Link>
                <Link to='/SignUp'>
                    <img className='Image-Responsive' alt='UserIcon' src={userIcon} />
                </Link>
            </div>
        </header >
    )
}

export default Header;