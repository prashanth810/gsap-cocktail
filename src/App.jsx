import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero section/HeroSection'
import Cocktails from './components/cocktails/Cocktails'
import About from './components/about/About'
import Art from './components/art/Art'
import Menus from './components/menu/Mrnus';


const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktails />
      <About />

      <Art />

      <Menus />
    </main>
  )
}

export default App
