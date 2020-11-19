import React from 'react'

function Project(props){
    function handleClick(){
        if (!props.selected){
            props.selectProject(props.index)
        }
    }
    const project = props.selected ? (
        <div className='selected project'>
            <div className='project-image-container'>
                <img className='project-image' alt={`screenshot of ${props.title}`} src={`/images/screenshots/${props.screenshotDesktop}`}/> 
            </div>
            <div className='project-info-container'>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <a href='www.google.com'>Live</a>
                <a href='www.google.com'>Repo</a>
            </div>
        </div>
    ) : 
    (
        <div onClick={() => handleClick()} className='project'>
            <img className='project-image' alt={`screenshot of ${props.title}`} src={`/images/screenshots/${props.screenshotDesktop}`}/> 
        </div>
    )

    return (
        <div className={`project-container ${props.selected ? 'selected' : ''}`} data-aos='fade-up' data-aos-delay={props.index*50}>
            {project}
        </div>
    )
}

export default Project