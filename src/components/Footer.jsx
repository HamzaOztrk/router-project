import React from 'react'
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <div className=' d-flex justify-content-between fixed-bottom bg-dark text-light'>
      <h1 className='d-inline'>© 2023  Hamza</h1> 
      <a href="https://github.com/HamzaOztrk" className='d-inline fs-1 m-2'><FaGithub/></a>
    </div>
  )
}

export default Footer