import React from 'react'
import './navbar.css'
import Logo from  '../../asset/logo.png'

export default function Navbar() {
  return (
    <nav className='container'>
        <img src={Logo} alt="" />

        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Programe</li>
            <li>Campus</li> 
            <li>Testimonials</li>
            <li> <button className='btn'> Contact Us</button></li>
        </ul>

    </nav>
  )
}
