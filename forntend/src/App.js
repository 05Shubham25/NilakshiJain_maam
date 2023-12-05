import React from 'react'
import { About, Book , Experience, Header, Footer } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app' >
      <Navbar />
      <Header />
      <About />
      <Book />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
