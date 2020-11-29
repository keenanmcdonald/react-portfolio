import React from 'react'

function Bio(props){
    return (
        <section id='bio'>
            <h1 data-aos='fade' className='section-title'>About</h1>
            <img data-aos='fade' className='bio-photo' alt='keenan mcdonald' src={`./images/bio-photo-2.png`}/>
            <p data-aos='fade' className='bio-text'>
                I'm a freelance web developer and designer base in Austin, TX. I've built several websites for bussinesses and indvidual clients. Currently, I'm working part-time for a small 
                startup based in Tokyo that does English language immersion. I'm building an ecommerce website, and a suite of online language learning tools as part of that project.
            </p>
            <p data-aos='fade' className='bio-text'>
                I started coding in high school but took a break to pursue my other passions in my early 20's. In 2019, I took Thinkful's Software Engineering bootcamp which is a self-paced full 
                stack web development program that connects students with coding mentors. Since then, I've worked further develop skills as a coder and work on projects that interest me. I'm 
                especially passionate about coding and web design when it intersects with my interests in music and the outdoors.
            </p>
            <p data-aos='fade' className='bio-text'>
                In addition to web development, I enjoy making experimental musician on a modular synthesizer, I build diy gear and design music production interfaces using software. I am also an
                outdoor adventure junkie - in my spare time, you can find me rock climbing, whitewater kayaking, mountaineering and caving throughout the U.S. and abroad. Prior to software development
                I worked in the outdoor education field working to get more kids spending time outside.
            </p>
        </section>
    )
}

export default Bio