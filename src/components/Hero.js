import React from 'react'

class Hero extends(React.Component){
    constructor(props){
        super(props)

        this.state={
            displayMessage: 0,
            messages: [
                `Hi, I'm Keenan McDonald`,
                `I'm a software developer and designer based in Austin, TX`,
                `I'm experiences in Javascript, React, Node.js, Python, Django, PostgreSQL...`,
                `Check out some of my work, read more about me or learn how to contact me below.`
            ]
        }
        this.updateScroll = this.updateScroll.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            this.updateScroll()
        })
    }
    
    updateScroll(){
        this.setState({displayMessage: Math.floor(window.scrollY / window.innerHeight)})
    }

    render(){
        return (
            <section id='hero'>
                <div className='hero-content'>
                    <h1 className='intro'>{this.state.messages[this.state.displayMessage]}</h1>
                </div>
            </section>
        )    
    }
}

export default Hero