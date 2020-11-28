import React from 'react'

function Bio(props){
    return (
        <section id='bio'>
            <h1 data-aos='fade' className='section-title'>About</h1>
            <img className='bio-photo' alt='keenan mcdonald' src={`/images/bio-photo-2.png`}/>
            <p data-aos='fade' className='bio-text'>I'm a web developer and recent graduate of Thinkful's Engineering Bootcamp, currently seeking employment as a software developer in Austin, TX. I started coding at a young age but took a break to pursue my other passions in my early 20's. I've been excited to return to more technical pursuits lately as I work to further develop skills as a coder. I'm especially passionate about coding and web design when it intersects with my interests in music and the outdoors.</p>
            <p data-aos='fade' className='bio-text'>In my spare time, you can find me rock climbing throughout the U.S. and abroad. I'm an avid mountaineer, mountain biker, caver, and kayaker as well. I have spent years in the outdoor education field working to get more kids spending time outside. In addition to outdoor pursuits, I am a musician and create ambient music using a modular synthesizer.</p>
        </section>
    )
}

export default Bio