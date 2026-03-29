import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero section/HeroSection'
import Cocktails from './components/cocktails/Cocktails'
import About from './components/about/About'
import Art from './components/art/Art'
import Menus from './components/menu/Mrnus';
import Contact from './components/footer/Contact'


const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktails />
      <About />

      <Art />

      <Menus />

      <Contact />
    </main>
  )
}

export default App
