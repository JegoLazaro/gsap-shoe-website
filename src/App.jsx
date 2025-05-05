import React, { useRef, useState } from 'react'
import Hero from './components/Hero'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-black'>
      <Hero />
      <section className='z-0 min-h-screen bg-slate-500' />
    </main>
  )
}

export default App