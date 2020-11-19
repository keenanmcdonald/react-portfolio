import './meyer_reset.css'
import './App.css';
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Bio from './components/Bio'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      intro: '',
      projects: [
        {
          title:'Terra', 
          selected:false, 
          description: 'Terra is a mapping app geared towards hikers, climbers, mountaineers. It is intended to make planning for mountain ascents easier as it gives a detailed, 3D view of terrain rather than a flat topo map. It allows users to drop waypoints and draw routes on a 3D terrain map of the world. Users can share their routes with the community and access routes left by others.', 
          screenshotDesktop: 'terra-desktop.png', 
          screenshotMobile: 'terra-mobile.png', 
          techStack: {frontEnd: 'Javascript, React, CesiumJS, Resium', backEnd: 'NodeJS, Express, Postgresql'}
        },
        {
          title:'Lost Art Records', 
          selected: false, 
          description: `Website commissioned by record label Lost Art Records. This is a static site consisting of a landing page and a page for each of the albums.`, 
          screenshotDesktop: 'lostart-desktop.png', 
          screenshotMobile: 'lostart-mobile.png', 
          techStack: {frontEnd: 'Javascript, React'}
        },
        {
          title:'onBelay', 
          selected: false, 
          description: `onBelay is a partner finder app for Rock Climbers. I created it because I and many other climbers in the community have trouble connecting quickly and easily with climbing partners especially when travelling. It let's climbers connect with other potential climbing partners that climb similar styles and within the same range of grades.`, 
          screenshotDesktop: 'onbelay-desktop.png', 
          screenshotMobile: 'onbelay-mobile.png', 
          techStack: {frontEnd: 'Javascript, React', backEnd: 'NodeJS, Express, Postgresql, PostGIS'}
        },
        {
          title: 'Why Not Me',
          selected: false,
          description: `Minimal single-page site built to promote and sell the book Why Not Me: Finessing Life's Slings and Arrows.`,
          screenshotDesktop: 'whynotme-desktop.png',
          techStack: {frontEnd: 'HTML, CSS, Javascript'}
        },
      ],
      bio: ''
    }
  }

  selectProject(index){
    console.log('select', index)
    const projects = this.state.projects
    for (let project of projects){
      project.selected = false
    }
    projects[index].selected = true
    this.setState({projects})
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <main className='main'>
          <Hero/>
          <Work projects={this.state.projects} selectProject={(index) => this.selectProject(index)}/>
          <Bio/>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App;
