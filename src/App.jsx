import React from 'react'
import Forgot from './pages/Forgot'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Mission from './pages/Mission'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
      <>
      <Mission />
      <div className='right-forms'>
        <Routes>
          <Route path='/' element = {< Login />} />
          <Route path='/sign-up' element = {< Signup />} />
          <Route path='/forgot-password' element = {< Forgot />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App