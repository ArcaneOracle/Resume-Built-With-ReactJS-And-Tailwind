// import { useState } from 'react'
import './App.css'
import NavBar from '../navbar/NavBar.jsx';
import Profile from '../profile/Profile.jsx';
import AboutMe from '../about-me/AboutMe.jsx';
import Skills from '../skills/Skills.jsx';
import Education from '../education/Education.jsx';
import Experience from "../experience/Experience.jsx";
import Projects from '../projects/Projects.jsx';
import Footer from '../footer/Footer.jsx';

function App() {
  return (
    <div id="main" className="min-h-screen">
      <NavBar />

      <div className="profileContent">
        <Profile />
        <AboutMe />
      </div>

      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;
