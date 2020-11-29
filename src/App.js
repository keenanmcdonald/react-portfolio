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
            <div>
              <p>
                Terra is a mapping app geared towards hikers, climbers, mountaineers. It allows users to drop waypoints, and draw routes, write comments on their routes, and 
                view distances and elevation changes on the routes that they create. Users can also share their routes and waypoints and view those created by others. This is 
                all while viewing a 3D terrain map of the world colored by satellite imagery.
              </p>
              <p>
                Terra relies on the <a className='project-text-link' rel="noreferrer" target='_blank' href='https://cesium.com/'>CESIUM ion SDK</a> to handle the 3D map. The user interface is built with <span className='green'>React</span>, 
                with backend built in <span className='green'>Node.js/Express</span> and a <span className='green'>PostgreSQL</span> database.
              </p>
            </div>
          ),
          screenshotDesktop: 'terra-desktop.png', 
          screenshotMobile: 'terra-mobile.png', 
          live: 'http://terra-app1.herokuapp.com',
          repo: 'https://github.com/keenanmcdonald/terra-app',
        },  
        {
          id: 1,
          title:'Lost Art Records', 
          selected: false, 
          description: (
            <div>
              <p>
                Website commissioned by record label Lost Art Records. This is a static site consisting of a landing page and a page for each of the albums.
              </p>
              <p>
                Lost Art Records is a record label based in Austin, Texas specializing in posthumous releases of the music of singer-sogwriter and country music legend Blaze Foley.
              </p>
              <p>The site is built using <span className='green'>React</span>.</p>
            </div>
          ), 
          screenshotDesktop: 'lostart-desktop.png', 
          screenshotMobile: 'lostart-mobile.png', 
          live: 'http://lostartrecords.com',
          repo: 'https://github.com/keenanmcdonald/lost-art-redesign',
        },
        {
          id: 2,
          title:'onBelay', 
          selected: false, 
          description: (
            <div>
              <p>
                onBelay is a partner-finder for rock clibers. It let's climbers connect with potential partners that climb similar styles and within the same difficulty range.
              </p>
              <p>
                The app uses location-based matching to match users with others that are within a certain mile radius of the current user - it works similar to many popular dating apps.
              </p>
              <p>
                onBelay uses a <span className='green'>React</span> frontend, as well as <span className='green'>Node.js/Express</span>, <span className='green'>PostgreSQL</span> and <span className='green'>PostGIS</span> for the backend.
              </p>
            </div>
          ), 
          screenshotDesktop: 'onbelay-desktop.png', 
          screenshotMobile: 'onbelay-mobile.png', 
          live: 'https://onbelayapp.com',
          repo: 'https://github.com/keenanmcdonald/onbelay-app',
        },
        {          
          id: 3,
          title: 'Why Not Me',
          selected: false,
          description: (
            <div>
              <p>
                A minimal single-page site built to promote and sell the book Why Not Me: Finessing Life's Slings and Arrows. The design of the page is intended to mirror the book jacket design.
              </p>
              <p>
                The site was built using vanilla <span className='green'>Javascript</span>, <span className='green'>HTML</span>, and <span className='green'>CSS</span>.
              </p>
            </div>
          ),
          screenshotDesktop: 'whynotme-desktop.png',
          live: 'http://donaldwheat.com',
          repo: 'https://github.com/keenanmcdonald/why-not-me-site',
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
