import React from 'react'

class Hero extends(React.Component){
    constructor(props){
        super(props)

        this.state={
            displayMessage: 0,
            messages: [
                'Keenan McDonald',
                'A software developer and designer based in Austin, TX',
                'Fluent in Javascript, React, Node.js, Python, Django',
            ]
        }
        this.updateScroll = this.updateScroll.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            console.log()
            this.updateScroll()
        })
    }
    
    updateScroll(){
        console.log('update scroll: ', window.scrollY)
        this.setState({displayMessage: Math.floor(window.scrollY / window.innerHeight)})
    }

    render(){
        return (
            <section id='hero'>
                <div className='hero-content'>
                    <div className='hello-container'>
                        <h1 className='hello'>Hi, I'm</h1>
                    </div>
                    <div className='intro-container'>
                        <h1 className='intro'>{this.state.messages[this.state.displayMessage]}</h1>
                    </div>
                </div>
            </section>
        )    
    }
}

export default Hero