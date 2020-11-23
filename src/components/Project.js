import React from 'react'

function Project(props){
    function handleClick(){
        props.selectProject(props.id)
        /*window screenTop doesn't seem to work - consider using jquery*/
        /*
        if (window.screenTop <  document.getElementById('work').offsetTop){
            window.scrollTo({top: document.getElementById('work').offsetTop, behavior: 'smooth'})
        }*/
    }

    return (
        <div className={`project-container`} data-aos='fade' data-aos-delay={props.index*50}>
            <div onClick={() => handleClick()} className='project'>
                <img className='project-image' alt={`screenshot of ${props.title}`} src={`/images/screenshots/${props.screenshotDesktop}`}/> 
            </div>
        </div>
    )
}

export default Project