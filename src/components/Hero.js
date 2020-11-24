import React from 'react'

class Hero extends(React.Component){
    constructor(props){
        super(props)

        this.state={
            displayMessage: 0,
            messages: [
                (<h1 className='intro'>Hi, I'm Keenan McDonald</h1> ),
                (<h1 className='intro'>I'm a software developer and designer based in Austin, TX</h1> ),
                (<h1 className='intro'>I'm experiences in Javascript, React, Node.js, Python, Django, PostgreSQL...</h1> ),
                (<h1 className='intro'>Check out some of <a href='#work' className='intro-link'>my work</a>, read more <a href='#bio' className='intro-link'>about me</a>, or learn how to <a href='#contact' className='intro-link'>contact me</a> below.</h1> ),
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
                    {this.state.messages[this.state.displayMessage]}
                </div>
            </section>
        )    
    }
}

export default Hero