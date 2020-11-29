import React from 'react'
import Typewriter from 'typewriter-effect'

function Contact(props){

    return (
        <section id='contact'>
            <h1 data-aos='fade' className='section-title'>Contact</h1>
            <div className='contact-content'>
                <div id='email' className='contact-link-container' data-aos='fade' data-aos-anchor-placement='top-bottom'>
                    <img alt='mail icon' src='./images/email-white.png'/>
                    <a target='_blank' rel="noreferrer" href='mailto:keenanjmcdonald@gmail.com' className='contact-link'>
                        <Typewriter 
                            options={{
                                wrapperClassName: 'tw-heading',
                                delay: 0.01,
                            }}
                            onInit={(tw) => {
                                tw.pasteString('email')
                                .callFunction(() => {
                                    document.getElementById('email').addEventListener('mouseenter', () => {
                                        tw
                                        .stop()
                                        .deleteAll(0.01)
                                        .changeDelay(0.01)
                                        .typeString('keenanjmcdonald')
                                        .pasteString('@gmail.com')
                                        .start()
                                    })
                                    document.getElementById('email').addEventListener('mouseleave', () => {
                                        tw
                                        .stop()
                                        .deleteAll(0.01)
                                        .changeDelay(0.01)
                                        .pasteString('email')
                                        .start()
                                    })
                                }, tw)
                                .start()
                            }}
                        />
                    </a>
                </div> 
                <div id='github' className='contact-link-container' data-aos='fade' data-aos-anchor-placement='top-bottom'>
                    <img alt='mail icon' src='./images/github-white.png'/>
                    <a target='_blank' rel="noreferrer" href='http://github.com/keenanmcdonald' className='contact-link'>
                    <Typewriter 
                            options={{
                                wrapperClassName: 'tw-heading',
                                delay: 0.01,
                                deleteSpeed: 0.01,
                            }}
                            onInit={(tw) => {
                                tw.pasteString('github')
                                .callFunction(() => {
                                    document.getElementById('github').addEventListener('mouseenter', () => {
                                        tw
                                        .stop()
                                        .changeDelay(0.01)
                                        .changeDeleteSpeed(0.01)
                                        .typeString('.com/keenanmcdonald')
                                        .start()
                                    })
                                    document.getElementById('github').addEventListener('mouseleave', () => {
                                        tw
                                        .stop()
                                        .deleteChars(19)
                                        .changeDelay(0.01)
                                        .start()
                                    })
                                }, tw)
                                .start()
                            }}
                        />
                    </a>
                </div> 
                <div id='linkedin' className='contact-link-container' data-aos='fade' data-aos-anchor-placement='top-bottom'>
                    <img alt='mail icon' src='./images/linkedin-white.png'/>
                    <a target='_blank' rel="noreferrer" href='http://linkedin.com/in/keenan-mcdonald' className='contact-link'>
                    <Typewriter 
                            options={{
                                wrapperClassName: 'tw-heading',
                                delay: 0.01,
                                deleteSpeed: 0.01,
                            }}
                            onInit={(tw) => {
                                tw.pasteString('linkedin')
                                .callFunction(() => {
                                    document.getElementById('linkedin').addEventListener('mouseenter', () => {
                                        tw
                                        .stop()
                                        .changeDelay(0.01)
                                        .typeString('.com/keenan-mcdonald')
                                        .start()
                                    })
                                    document.getElementById('linkedin').addEventListener('mouseleave', () => {
                                        tw
                                        .stop()
                                        .changeDeleteSpeed(0.01)
                                        .deleteChars(20)
                                        .changeDelay(0.01)
                                        .start()
                                    })
                                }, tw)
                                .start()
                            }}
                        />
                    </a>
                </div> 
            </div>
        </section>
    )
}

export default Contact