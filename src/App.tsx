import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Projects from './pages/Projects'


function App() {


  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    <Footer />


  </>
}


export default App
