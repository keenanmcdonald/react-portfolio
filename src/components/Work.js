import React from 'react'
import Project from './Project'

function Work(props){
    console.log('work rerender')

    const thumbnails = []
    for (let i = 0; i < props.projects.length; i++){
        if (props.projects[i].selected) {
            thumbnails.unshift(
                <Project index={i} key={i} {...props.projects[i]}/>
            )
        }
        else{
            thumbnails.push(
                <Project index={i} key={i} {...props.projects[i]} selectProject={(index) => props.selectProject(index)}/>
            )    
        }
    }

    return (
        <section id='work'>
            <div className='projects'>
             {thumbnails}
            </div>
        </section>
    )    
}

export default Work