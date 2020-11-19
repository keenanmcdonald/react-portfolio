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
        {title:'Terra', selected:false}
      ],
      bio: ''
    }
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <main className='main'>
          <Hero/>
          <Work projects={this.state.projects}/>
          <Bio/>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App;
