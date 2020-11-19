import React from 'react'
import logo from '../images/logo.png'
import Nav from './Nav'

function Header(props){
    return (
        <header className='header'>
            <img className='logo' alt='KM' src={logo}/>
            <Nav />
        </header>
    )
}

export default Header