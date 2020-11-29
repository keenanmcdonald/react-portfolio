import React from 'react'

function Project(props){
    function handleClick(){
        props.selectProject(props.id)
    }

    return (
        <div className={`project-container`} data-aos='fade' data-aos-anchor-placement='top-bottom' data-aos-delay={props.index*50}>
            <div onClick={() => handleClick()} className='project'>
                <img className='project-image' alt={`screenshot of ${props.title}`} src={`./images/screenshots/${props.screenshotDesktop}`}/> 
            </div>
        </div>
    )
}

export default Project