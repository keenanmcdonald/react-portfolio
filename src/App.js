import 'aos/dist/aos.css'
import './meyer_reset.css'
import './App.css';
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Bio from './components/Bio'
import Contact from './components/Contact'
import AOS from 'aos'

AOS.init()

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      projects: [
        {
          id: 0,
          title:'Terra', 
          selected:false, 
          description: (
            <p>
              Terra is a mapping app geared towards hikers, climbers, mountaineers. It allows users to drop waypoints and draw routes on a 3D terrain map of the world.
            </p>
          ),
          screenshotDesktop: 'terra-desktop.png', 
          screenshotMobile: 'terra-mobile.png', 
          techStack: {frontEnd: 'Javascript, React, CesiumJS, Resium', backEnd: 'NodeJS, Express, Postgresql'},
          live: 'terra-app1.heroku.com',
          repo: '',
          colors: {main: '', accent: ''}
        },  
        {
          id: 1,
          title:'Lost Art Records', 
          selected: false, 
          description: `Website commissioned by record label Lost Art Records. This is a static site consisting of a landing page and a page for each of the albums.`, 
          screenshotDesktop: 'lostart-desktop.png', 
          screenshotMobile: 'lostart-mobile.png', 
          techStack: {frontEnd: 'Javascript, React'}
        },
        {
          id: 2,
          title:'onBelay', 
          selected: false, 
          description: `onBelay is a partner finder app for Rock Climbers. It let's climbers connect with other potential partners that climb similar styles and within the same difficulty.`, 
          screenshotDesktop: 'onbelay-desktop.png', 
          screenshotMobile: 'onbelay-mobile.png', 
          techStack: {frontEnd: 'Javascript, React', backEnd: 'NodeJS, Express, Postgresql, PostGIS'}
        },
        {          
          id: 3,
          title: 'Why Not Me',
          selected: false,
          description: `A minimal single-page site built to promote and sell the book Why Not Me: Finessing Life's Slings and Arrows.`,
          screenshotDesktop: 'whynotme-desktop.png',
          techStack: {frontEnd: 'HTML, CSS, Javascript'}
        },
      ],
      selected: 0,
      transition: false,
      bio: ''
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
        this.onScroll()
    })
  }

  onScroll(){
    
    const titles = document.getElementsByClassName('section-title')
    for (let title of titles){
      let scroll = -(window.scrollY - title.parentElement.offsetTop) / window.innerHeight
        title.style.top = 120-(scroll*(50+(50*scroll))) + 'px'
        console.log(scroll)
    }
    
  }

  selectProject(id){
    this.setState({transition: true})
    setTimeout(() => {
      this.setState({transition: false, selected: id})
    }, 150)
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <main className='main'>
          <Hero/>
          <Work transition={this.state.transition} aos={this.state.aos} projects={this.state.projects} selected={this.state.selected} selectProject={(id) => this.selectProject(id)}/>
          <Bio/>
          <Contact/>
        </main>
      </div>
    )
  }
}

export default App;
