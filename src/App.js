import React from 'react'
import "./App.css"

import Home from './componenet/Home'
import About from './componenet/About'
import Navbar from './componenet/Navbar'
import Skill from './componenet/Skill'
import Footer from './componenet/footer'
import Project from './componenet/Project'
import Contact from './componenet/Contact'





const App = () => {
  return (
    <> 
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>


    </>

  )
}

export default App;