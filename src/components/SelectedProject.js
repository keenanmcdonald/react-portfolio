import React from 'react'

function SelectedProject(props){

    return (
        <div data-aos='fade' className={`selected-project ${props.transition ? 'fade-out' : ''}`}>
                <div key={0} className='project-image-container'>
                    <img className='project-image' alt={`screenshot of ${props.title}`} src={`/images/screenshots/${props.screenshotDesktop}`}/> 
                    <div className='link-container'>
                        <a className='project-link live' target='_blank' rel="noreferrer" href={props.live}>Live</a>
                        <a className='project-link repo' target='_blank' rel="noreferrer" href={props.repo}>Repo</a>
                    </div>
                </div>
                <div className='project-info-container'>
                    <h2 className='project-title'>{props.title}</h2>
                    <div className='project-description'>{props.description}</div>
                </div>
        </div>

    )
}

export default SelectedProject