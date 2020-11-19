import React from 'react'

function ProjectThumbnail(props){
    return (
        <div className='project-thumbnail'>
            <img className='thumbnail-image' alt={`screenshot of ${props.title}`} src={props.imagePath}/> 
            <h4 className='thumbnail-title'>{props.title}</h4>
        </div>
    )
}

export default ProjectThumbnail