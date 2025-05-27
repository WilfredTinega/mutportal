import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Mission from './pages/Mission'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'

const App = () => {

  return (
      <div className='grid grid-cols-2 items-center min-h-screen'>
      <Mission />
      <div>
        <Routes>
          <Route path='/' element = {< Login />} />
          <Route path='/sign-up' element = {< Signup />} />
          <Route path='*' element = {< NotFound />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App