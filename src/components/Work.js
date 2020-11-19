import React from 'react'
import ProjectThumbnail from './ProjectThumbnail'
import MainProject from './MainProject'

function Work(props){

    const thumbnails = []
    let main = ''
    for (let i = 0; i < props.projects.length; i++){
        if (props.projects[i].selected) {
            main = <MainProject {...props.project[i]}/>
        }
        else{
            thumbnails.push(
                <ProjectThumbnail key={i} {...props.projects[i]}/>
            )    
        }
    }

    return (
        <section id='work'>
            <h2>Work</h2> 
            {main}
            {thumbnails}
        </section>
    )    
}

export default Work