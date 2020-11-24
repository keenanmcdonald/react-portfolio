import React from 'react'
import logo from '../images/logo.png'
import Nav from './Nav'

class Header extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: 'logo'
        }
        this.onScroll = this.onScroll.bind(this)
    }

    componentDidMount(){
        /*
        window.addEventListener('scroll', () => {
            this.onScroll()
        })*/
    }

    onScroll(){
        if (window.scrollY >= document.getElementById('bio').offsetTop - (window.innerHeight/2)){
            this.setState({title: 'about'})
        }
        else if (window.scrollY >= document.getElementById('work').offsetTop - (window.innerHeight/2)){
            this.setState({title: 'work'})
        }
        else {
            this.setState({title: 'logo'})
        }
    }

    render(){
        let title = ''
        if (this.state.title === 'logo'){
            title = <img className='logo' alt='KM' src={logo}/>
        }
        else if (this.state.title === 'work'){
            title = <h1 className='title'>Work</h1>
        }
        else if (this.state.title === 'about' ){
            title = <h1 className='title'>About</h1>
        }
        else if (this.state.title === 'contact'){
            title = <h1 className='title'>Contact</h1>
        }

        return (
            <header className='header'>
                {title}
                <Nav />
            </header>
        )    
    }
}

export default Header