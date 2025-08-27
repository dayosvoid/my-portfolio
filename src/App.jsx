import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path='/'/>
          <Route element={<AboutPage/>} path='/about'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
