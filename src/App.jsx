import { useState } from 'react'
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom'
import { Homepage } from './pages/homepage'
import { Today } from './pages/Today'
import { ErrorPage } from './pages/ErrorPage'


function App() {

  return (
    <>
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/today">Today</Link>

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/today' element={<Today />} />
          <Route path='*' element={<ErrorPage />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
