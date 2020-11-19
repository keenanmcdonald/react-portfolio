import React from 'react'

function MainProject(props){
    return (
        <div className='main-project'>
            <h3>{props.title}</h3>
            <img className='main-image' alt={`screenshot of ${props.title}`} src={props.imagePath}/> 
            <div className='main-text'>
                <p>{props.description}</p>
                <p>{props.techStack}</p>
                <button>Live</button>
                <button>Repo</button>
            </div>
        </div> 
    )
}

export default MainProject