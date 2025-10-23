import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import Contato from './Contato'

export default function Main() {
  return (
    <main className="container mx-auto mt-12 md:mt-32">
      <Hero />
      <Projects />
      <Contato />
    </main>
  )
}
