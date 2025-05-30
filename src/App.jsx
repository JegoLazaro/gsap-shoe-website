import React, { useRef, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Featured from './components/Featured'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-white'>
      <Navbar />
      <Hero />
      <About />
      <Featured />
      {/* <section className='z-0 min-h-screen bg-black' /> */}
    </main>
  )
}

export default App