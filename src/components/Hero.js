import React from 'react'

function Hero(props){
    return (
        <section id='hero'>
            <div className='hero-content'>
                <div className='hero-left'>
                    <h1>Hello,</h1> 
                    <h1>I am</h1>
                </div>
                <div className='hero-left-spacer'>
                    <h1>Hello,</h1> 
                    <h1>I am</h1>
                </div>
                <div className='hero-right'>
                    <p className='my-name' data-aos='fade' data-aos-offset='260' data-aos-duration='260'>Keenan McDonald</p>
                    <p data-aos='fade' data-aos-offset='260' data-aos-duration='260'>a software<span className='blue'> developer</span> and <span className='blue'>designer</span> based in <span className='green'>Austin, TX</span>.</p> 
                    <p data-aos='fade' data-aos-offset='260' data-aos-duration='260'>fluent in Javascript, CSS, HTML, Python, SQL</p>
                </div>
            </div>
        </section>
    )
}

export default Hero