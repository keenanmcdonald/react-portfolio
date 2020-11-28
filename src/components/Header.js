import React from 'react'
import Nav from './Nav'

class Header extends React.Component{

    render(){

        return (
            <header className='header'>
                <Nav />
            </header>
        )    
    }
}

export default Header