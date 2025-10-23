import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import Contato from './Contato'

export default function Main() {
  return (
    <main className="container mx-auto pt-12 md:pt-32 bg-fundo-principal">
      <Hero />
      <Projects />
      <Contato />
    </main>
  )
}
