import React from 'react'

function SelectedProject(props){

    return (
        <div data-aos='fade' className={`selected-project ${props.transition ? 'fade-out' : ''}`}>
                <div key={0} className='project-image-container'>
                    <img className='project-image' alt={`screenshot of ${props.title}`} src={`/images/screenshots/${props.screenshotDesktop}`}/> 
                    <div className='link-container'>
                        <a className='project-link live' href='www.google.com'>Live Site</a>
                        <a className='project-link repo' href='www.google.com'>Repo</a>
                    </div>
                </div>
                <div className='project-info-container'>
                    <h1 className='project-title'>{props.title}</h1>
                    <p>{props.description}</p>
                    <button className='expand-project'>
                        <img className='down-arrow' alt='down arrow' src='/images/down-arrow.png'/>
                    </button>
                </div>
        </div>

    )
}

export default SelectedProject