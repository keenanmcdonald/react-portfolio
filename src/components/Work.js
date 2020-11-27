import React from 'react'
import Project from './Project'
import SelectedProject from './SelectedProject'


function Work(props){
    console.log('work rerender')

    const thumbnails = []
    let selected = {}
    for (let i = 0; i < props.projects.length; i++){
        if (props.projects[i].id === props.selected){
            selected = props.projects[i]
        }
        else{
            thumbnails.push(
                <Project index={i} key={i} transition={props.transition} {...props.projects[i]} selectProject={(id) => props.selectProject(id)}/>
            )
    
        }
    }

    return (
        <section id='work'>
            <h1 className='section-title'>Work</h1>
            <div className='projects'>
                <SelectedProject transition={props.transition} {...selected}/>
                {thumbnails}
            </div>
        </section>
    )    
}

export default Work