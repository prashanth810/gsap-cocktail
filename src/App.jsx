import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero section/HeroSection'
import Cocktails from './components/cocktails/Cocktails'
import About from './components/about/About'

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktails />
      <About />
    </main>
  )
}

export default App
