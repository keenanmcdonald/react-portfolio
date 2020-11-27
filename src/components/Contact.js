import React from 'react'

function Contact(props){
    return (
        <section id='contact'>
            <h1 className='section-title'>Contact</h1>
            <div className='contact-content'>
                <a data-aos='fade' href='mailto:keenanjmcdonald@gmail.com' className='contact-link'>Email</a>
                <a data-aos='fade' href='github.com/keenanmcdonald' className='contact-link'>Github</a>
                <a data-aos='fade' href='linkedin.com/in/keenan-mcdonald' className='contact-link'>Linkedin</a>
                <a data-aos='fade' href='www.instagram.com/keenanmcd' className='contact-link'>Instagram</a>
            </div>
        </section>
    )
}

export default Contact