import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <span>Page not Found</span>
        <><Link className='border border-lime-500 flex  rounded-full' to="/" >Home</Link></>
        
    </div>
  )
}

export default NotFound